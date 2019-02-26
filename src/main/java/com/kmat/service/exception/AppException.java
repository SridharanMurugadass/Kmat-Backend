package com.kmat.service.exception;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class AppException extends Exception {
	private static final long serialVersionUID = 1L;
	
	private List<Error> errors;
	private ResponseStatusCode responseStatusCode;
	
	public AppException() {}
	public AppException(ResponseStatusCode responseStatusCode, ErrorCode errCode, Locale locale) {
		this(responseStatusCode, errCode, locale, null);
	}
	
	public AppException(ResponseStatusCode responseStatusCode, ErrorCode errCode, Locale locale, Object...params) {
		getErrors().add(new Error(errCode, locale, params));
		this.responseStatusCode = responseStatusCode;
	}

	public List<Error> getErrors() {
		return (errors == null ? errors = new ArrayList<>() : errors);
	}

	public void setErrors(List<Error> errors) {
		this.errors = errors;
	}

	public ResponseStatusCode getResponseStatusCode() {
		return responseStatusCode;
	}

	public void setResponseStatusCode(ResponseStatusCode responseStatusCode) {
		this.responseStatusCode = responseStatusCode;
	}
}
