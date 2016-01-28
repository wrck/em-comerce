package com.study.cms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import com.study.cms.config.AppConfig;
@EnableWebSecurity
public class Application {
	public static void main(String[] args) throws Exception {
		SpringApplication.run(AppConfig.class, args);
	}
}
