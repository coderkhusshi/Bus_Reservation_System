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

import com.cg.entity.Feedback;
import com.cg.exception.InvalidRatingException;
import com.cg.service.FeedbackService;

@RestController
@CrossOrigin
@RequestMapping(value = "/feedback")
public class FeedbackController {

	@Autowired
	FeedbackService feedbackService;

	@GetMapping(produces = "application/json")
	List<Feedback> showFeedBack() {
		List<Feedback> feedbackList = feedbackService.showFeedback();
		Iterator<Feedback> feedback = feedbackList.iterator();
		while (feedback.hasNext()) {
			System.out.println(feedback.next());

		}
		return feedbackList;

	}

	@PostMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Feedback> addFeedback(@Valid @RequestBody Feedback feedback) throws InvalidRatingException {
		int feedbackId = feedbackService.addFeedBack(feedback);
		return ResponseEntity.ok(feedback);
	}

	@PutMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Feedback> updateFeedback(@Valid @RequestBody Feedback feedback) {
		Feedback f = feedbackService.updateFeedback(feedback);
		return new ResponseEntity<Feedback>(f, HttpStatus.ACCEPTED);

	}

	@DeleteMapping("/{feedbackId}")
	ResponseEntity deleFeedback(@PathVariable("feedbackId") int feedbackId) {
		feedbackService.deleteFeedbackById(feedbackId);
		return new ResponseEntity("feedback with Id" + feedbackId + "is deleted", HttpStatus.OK);
	}

}
