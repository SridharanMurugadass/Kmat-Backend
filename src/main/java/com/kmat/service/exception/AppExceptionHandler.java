package com.kmat.service.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.kmat.service.utils.MessageService;

@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler {
	private static final Logger LOGGER = LoggerFactory.getLogger(AppException.class);

	@Autowired
	private ErrorProperties errorProperties;
	@Autowired
	private MessageService msgService;

	@ExceptionHandler(value = AppException.class)
	public ResponseEntity<Object> handleAppException(Exception ex, WebRequest webRequest) {
		AppException ae = (AppException) ex;
		return handleAppException(ex, ae, webRequest);
	}

	@ExceptionHandler(value = Throwable.class)
	public ResponseEntity<Object> handleThrowable(Throwable th, WebRequest webRequest) {
		AppException ae = new AppException(ErrorCode.INTERNAL_SERVER_ERROR);
		return handleAppException(th, ae, webRequest);
	}

	private ResponseEntity<Object> handleAppException(Throwable th, AppException ae, WebRequest webRequest) {
		LOGGER.error("Appilcation Exception ", th);
		ae.getErrors().forEach(error -> {
			error.setCode(errorProperties.getCode(error.getErrCode()));
			error.setMsg(msgService.getMessage(error.getCode(), error.getArgs()));
		});
		HttpStatus responseStatusCode = getHttpStatus(ae.getResponseStatusCode() != null ? ae.getResponseStatusCode()
				: ResponseStatusCode.INTERNAL_SERVER_ERROR);
		return handleExceptionInternal(ae, ae.getErrors(), new HttpHeaders(), responseStatusCode, webRequest);
	}

	private HttpStatus getHttpStatus(ResponseStatusCode responseStatusCode) {
		switch (responseStatusCode) {
		case NOT_FOUND:
			return HttpStatus.NOT_FOUND;
		default:
			return HttpStatus.INTERNAL_SERVER_ERROR;
		}
	}
}
