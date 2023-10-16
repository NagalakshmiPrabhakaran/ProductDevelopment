package com.project.disaster.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.disaster.entity.AdminSignupEntity;

public interface AdminRepository extends JpaRepository<AdminSignupEntity,Integer> {
	Optional<AdminSignupEntity> findByEmail(String email);
}
