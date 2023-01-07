package com.cg.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.Payment;
import com.cg.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
    PaymentRepository paymentdao;
    @Transactional
    @Override
    public List<Payment> showPayment() {
        return paymentdao.findAll();
    }
    @Transactional
    @Override
    public int addPayment(@Valid Payment payment) {
        Optional<Payment> paymentid=paymentdao.findById(payment.getPaymentid());
        paymentdao.saveAndFlush(payment);
        return payment.getPaymentid();
    }
    @Transactional
    @Override
    public Payment updatePayment(@Valid Payment payment) {
        Optional<Payment> previouspayment=paymentdao.findById(payment.getPaymentid());
        Payment pupdate=previouspayment.get();
        pupdate.setAmount(payment.getAmount());
        pupdate.setPaymentdate(payment.getPaymentdate());
        pupdate.setStatus(payment.getStatus());
        return pupdate;
    }
    @Override
    public void deletePaymentById(int feedbackId) {
        // TODO Auto-generated method stub
    }

}
