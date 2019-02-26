package com.kmat.service.exception;

import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource(value = "classpath:error.properties")
@ConfigurationProperties
public class ErrorProperties {
	public Map<String, String> errors;
	
	public String getCode(ErrorCode errorCode) {
		return errors.get(errorCode.toString());
	}

	public Map<String, String> getErrors() {
		return errors;
	}

	public void setErrors(Map<String, String> errors) {
		this.errors = errors;
	}
}
