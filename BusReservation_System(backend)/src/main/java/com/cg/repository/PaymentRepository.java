package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
