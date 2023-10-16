package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.entity.ProductEntity;
import com.example.demo.repository.ProductRepository;
@Service
public class ProductService {




	@Autowired
	ProductRepository productRepository;
		public Page<ProductEntity> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return productRepository.findAll(paging);
		}
		public Page<ProductEntity> Paging(int CurrentPage,int itemsPerPage){
			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
			return productRepository.findAll(paging);
		}
}

