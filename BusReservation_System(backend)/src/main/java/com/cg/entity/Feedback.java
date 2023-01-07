package com.cg.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="feedback")
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "feedBackId")

public class Feedback {
	  @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	     int feedBackId;
	     int driverRating;
	     int serviceRating;
	     int overallRating;
	     @NotNull(message="comments are mandatory")
	     String comments;
	     LocalDate feedbackdate;
	     
	     @OneToOne(mappedBy="feedback")
	 	Bus bus;
	     
		public int getFeedBackId() {
			return feedBackId;
		}
		public void setFeedBackId(int feedBackId) {
			this.feedBackId = feedBackId;
		}
		public int getDriverRating() {
			return driverRating;
		}
		public void setDriverRating(int driverRating) {
			this.driverRating = driverRating;
		}
		public int getServiceRating() {
			return serviceRating;
		}
		public void setServiceRating(int serviceRating) {
			this.serviceRating = serviceRating;
		}
		public int getOverallRating() {
			return overallRating;
		}
		public void setOverallRating(int overallRating) {
			this.overallRating = overallRating;
		}
		public String getComments() {
			return comments;
		}
		public void setComments(String comments) {
			this.comments = comments;
		}
		public LocalDate getFeedbackdate() {
			return feedbackdate;
		}
		public void setFeedbackdate(LocalDate feedbackdate) {
			this.feedbackdate = feedbackdate;
		}
		public Bus getBus() {
			return bus;
		}
		public void setBus(Bus bus) {
			this.bus = bus;
		}
		
	     

}
