package com.kmat.service.exception;

import java.util.Locale;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Error {

	private ErrorCode errCode;
	private Locale locale;
	private Object[] args;
	
	private String code;
	private String msg;

	public Error() {}
	
	public Error(ErrorCode errorCode, Locale locale, Object...args) {
		this(errorCode, null, locale, args);
	}
	
	public Error(ErrorCode errorCode, String defaultMsg, Locale locale, Object...args) {
		this.errCode = errorCode;
		this.msg = defaultMsg;
		this.locale = locale;
		this.args = args;
	}
	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	@JsonIgnore
	public ErrorCode getErrCode() {
		return errCode;
	}

	public void setErrCode(ErrorCode errCode) {
		this.errCode = errCode;
	}

	@JsonIgnore
	public Locale getLocale() {
		return locale;
	}

	public void setLocale(Locale locale) {
		this.locale = locale;
	}

	@JsonIgnore
	public Object[] getArgs() {
		return args;
	}

	public void setArgs(Object[] args) {
		this.args = args;
	}
}
