package com.project.disaster.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.disaster.entity.PaymentEntity;
import com.project.disaster.repository.PaymentRepository;

	@RestController
	@RequestMapping("/payments")
	public class PaymentController {
	    @Autowired
	    private PaymentRepository paymentRepository;

	    @PostMapping("/makePayment")
	    public PaymentEntity makePayment(@RequestBody PaymentEntity payment) {
	        // Validate and process payment (you can add more logic here)
	        PaymentEntity savedPayment = paymentRepository.save(payment);
	        return savedPayment;
	    }
	    @GetMapping("/getAllPayments")
	    public List<PaymentEntity> getAllPayments() {
	        // Retrieve all payment records from the database
	        List<PaymentEntity> payments = paymentRepository.findAll();
	        return payments;
	    }
	}
