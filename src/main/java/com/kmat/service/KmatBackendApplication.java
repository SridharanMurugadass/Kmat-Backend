package com.kmat.service;

import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableConfigurationProperties
public class KmatBackendApplication {

	@Bean
	public Random randomGenerator() {
	    return new Random();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(KmatBackendApplication.class, args);
	}
}

