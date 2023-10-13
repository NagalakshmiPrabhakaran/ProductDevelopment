package com.project.disaster.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.disaster.entity.PaymentEntity;

public interface PaymentRepository extends JpaRepository<PaymentEntity, Long> {
    // Define custom query methods if needed
}
