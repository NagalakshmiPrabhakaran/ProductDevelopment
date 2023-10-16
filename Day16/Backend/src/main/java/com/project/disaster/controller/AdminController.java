package com.project.disaster.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.disaster.entity.Customer;
import com.project.disaster.service.AdminService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class AdminController {
    @Autowired
    private AdminService usersService;
    @GetMapping
    public List<Customer> getAllUsers() {
        return usersService.getAllUsers();
    }
    @GetMapping("/{id}")
    public Customer getUserById(@PathVariable int id) {
        return usersService.getUserById(id);
    }
    @GetMapping("/{email}")
    public Optional<Customer> findByUsername(@PathVariable String email) {
    	return usersService.findByUsername(email);
    }
    @PostMapping
    public Customer createUser(@RequestBody Customer user) {
        return usersService.createUser(user);
    }
    @PutMapping("/{id}")
    public Customer updateUser(@PathVariable int id, @RequestBody Customer updatedUser) {
        return usersService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        usersService.deleteUser(id);
    }
}


