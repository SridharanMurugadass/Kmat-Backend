package com.kmat.service.utils;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

@Component
public class MessageService {

	@Autowired private MessageSource messageSource;
	
	public String getMessage(String code, Locale locale, Object...args) {
		return getMessage(code, "", locale, args);
	}
	
	public String getMessage(String code, String defaultMsg, Locale locale, Object...args) {
		return messageSource.getMessage(code, args, defaultMsg, locale);
	}
}
