package com.kmat.service.exception;

import org.apache.commons.lang3.StringUtils;
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

	@Autowired private ErrorProperties errorProperties;
	@Autowired private MessageService msgService;
	
	@ExceptionHandler(value = AppException.class)
	public ResponseEntity<Object> handleAppException(Exception ex, WebRequest webRequest) {
		AppException ae = (AppException)ex;
		ae.getErrors().forEach(error -> {
			error.setCode(errorProperties.getCode(error.getErrCode()));
			if (StringUtils.isBlank(error.getMsg())) {
				error.setMsg(msgService.getMessage(error.getCode(), error.getLocale(), error.getArgs()));
			}
		});
		return handleExceptionInternal(ex, ae.getErrors(), new HttpHeaders(), getHttpStatus(ae.getResponseStatusCode()), webRequest);
	}
	
	private HttpStatus getHttpStatus(ResponseStatusCode responseStatusCode) {
		switch (responseStatusCode) {
			case NOT_FOUND: return HttpStatus.NOT_FOUND;
			default: return HttpStatus.INTERNAL_SERVER_ERROR;
		}
	}
}
