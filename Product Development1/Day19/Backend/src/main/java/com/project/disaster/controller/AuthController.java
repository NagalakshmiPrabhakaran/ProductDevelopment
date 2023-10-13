package com.project.disaster.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.disaster.dto.LoginRequest;
import com.project.disaster.dto.RegisterRequest;
import com.project.disaster.service.AuthService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Transactional
public class AuthController {
	@Autowired
	  private final AuthService authService;

	    @PostMapping("/register")
	    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
	        boolean isRegistered = authService.userRegistration(request);
	        return isRegistered ? ResponseEntity.ok("User registered successfully")
	                : ResponseEntity.badRequest().body("User already Exists");
	    }

	    @PostMapping("/login")
	    public ResponseEntity<?> authenticate(@RequestBody LoginRequest request) {
	    	System.err.println(authService.userAuthentication(request));
	        return (authService.userAuthentication(request));
	    }
}