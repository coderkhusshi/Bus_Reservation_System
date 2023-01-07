package com.cg.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;



@Entity
@Table(name="payment")
@JsonIdentityInfo(
          generator = ObjectIdGenerators.PropertyGenerator.class, 
          property =  "paymentid")
public class Payment {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	     int paymentid;
	     int amount;
	     String Status;
	     LocalDate paymentdate;
	    public int getPaymentid() {
	        return paymentid;
	    }
	    public void setPaymentId(int paymentId) {
	        this.paymentid = paymentId;
	    }
	    public int getAmount() {
	        return amount;
	    }
	    public void setAmount(int amount) {
	        this.amount = amount;
	    }
	    public String getStatus() {
	        return Status;
	    }
	    public void setStatus(String status) {
	        Status = status;
	    }
	    public LocalDate getPaymentdate() {
	        return paymentdate;
	    }
	    public void setPaymentdate(LocalDate paymentdate) {
	        this.paymentdate = paymentdate;
	    }
	    @Override
	    public String toString() {
	        return "Payment [paymentId=" + paymentid + ", amount=" + amount + ", Status=" + Status + ", paymentdate="
	                + paymentdate + "]";
	    }


}
