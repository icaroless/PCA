package com.pca.educapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class EducappApplication {

	public static void main(String[] args) {
		SpringApplication.run(EducappApplication.class, args);
	}
}
