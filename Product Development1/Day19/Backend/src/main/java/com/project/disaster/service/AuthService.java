package com.project.disaster.service;


import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.disaster.dto.LoginRequest;
import com.project.disaster.dto.LoginResponse;
import com.project.disaster.dto.RegisterRequest;
import com.project.disaster.entity.Customer;
import com.project.disaster.enumerate.Role;
import com.project.disaster.repository.CustomerRepository;
import com.project.disaster.repository.UserRepository;
import com.project.disaster.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor

public class AuthService {
	 private final CustomerRepository userRepository;
	    private final PasswordEncoder passwordEncoder;
	    private final AuthenticationManager authenticationManager;
	    private final JwtUtil jwtUtil;

	    public boolean userRegistration(RegisterRequest request) {
	        Optional<Customer> isUserExists = userRepository.findByEmail(request.getEmail());
	        if (!isUserExists.isPresent()) {
	            var user = Customer.builder()
	                    .email(request.getEmail())
	                    .password(passwordEncoder.encode(request.getPassword()))
	                    .role(Role.valueOf(request.getRole().toUpperCase()))
	                    .build();
	            userRepository.save(user);
	            return true;
	        } else {
	            return false;
	        }
	    }

	    public ResponseEntity<?> userAuthentication(LoginRequest request) {
	        var user = userRepository.findByEmail(request.getEmail()).orElse(null);

	        if (user == null) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                    .body("No user found! Kindly Register or check Mail");
	        }

	        try {
	            authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
	            
	            var token = jwtUtil.generateToken(user);

	            return ResponseEntity.ok(LoginResponse.builder()
	                .token(token).role(user.getRole())
	                .build());
	        } catch (BadCredentialsException e) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                .body("Wrong password! Please Try again");
	        }
	    }
}
