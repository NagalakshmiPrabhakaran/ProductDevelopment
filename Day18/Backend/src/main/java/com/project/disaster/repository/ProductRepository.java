package com.project.disaster.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.disaster.entity.ProductEntity;




public interface ProductRepository extends JpaRepository<ProductEntity,Integer>{

}
