package com.cg.service;

import java.util.List;

import javax.validation.Valid;

import com.cg.entity.Payment;

public interface PaymentService {
	
	List<Payment> showPayment();
    int addPayment(@Valid Payment payment);
    Payment updatePayment(@Valid Payment payment);
    
    void deletePaymentById(int paymentId);
    

}
