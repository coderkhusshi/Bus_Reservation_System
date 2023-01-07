package com.cg.controller;

import java.util.Iterator;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entity.Payment;
import com.cg.service.PaymentService;



@RestController
@CrossOrigin
   @RequestMapping(path = "/payment")
public class PaymentController {
	
	        @Autowired
	        PaymentService paymentService;
	        
	        // http://localhost:8081/BusApp/payment/show
	        @GetMapping( produces = "application/json")
	        List<Payment> showPayment() {
	            List<Payment> PaymentList = paymentService.showPayment();
	            Iterator<Payment> payment = PaymentList.iterator();
	            while (payment.hasNext()) {
	                payment.next();
	            }
	            return PaymentList;
	        }
	        // http://localhost:8081/BusApp/payment/addfeed
	        @PostMapping( consumes = "application/json", produces = "application/json")
	        ResponseEntity<Payment> addFeedback(@Valid @RequestBody Payment payment)  {
	            @SuppressWarnings("unused")
	            int paymentId = paymentService.addPayment(payment);
	            return ResponseEntity.ok(payment);
	        }
	        // http://localhost:8081/BusApp/payment/putfeed
	        @PutMapping( consumes = "application/json", produces = "application/json")
	        ResponseEntity<Payment> updateFeedback(@Valid @RequestBody Payment payment) {
	            Payment f = paymentService.updatePayment(payment);
	            return new ResponseEntity<Payment>(f, HttpStatus.ACCEPTED);
	        }
	        // http://localhost:8081/BusApp/feedback/id
	        @SuppressWarnings({ "rawtypes", "unchecked" })
	        @DeleteMapping("/{paymentId}")
	        ResponseEntity deleFeedback(@PathVariable("paymentId") int paymentId) {
	            paymentService.deletePaymentById(paymentId);
	            return new ResponseEntity("Payment with Id" + paymentId + "is deleted", HttpStatus.OK);
	        
	        
	        
	    }
	        }
	 


