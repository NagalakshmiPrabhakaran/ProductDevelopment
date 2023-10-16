package com.project.disaster;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BackendForDisasterApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendForDisasterApplication.class, args);
	}

}
