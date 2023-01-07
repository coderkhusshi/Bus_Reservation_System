package com.cg.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entity.Feedback;
import com.cg.entity.Route;
import com.cg.exception.InvalidRatingException;
import com.cg.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	@Autowired
    FeedbackRepository feedbackdao;
    
	
	@Transactional
	@Override
	public List<Feedback> showFeedback() {
		return feedbackdao.findAll();
	}
    
    
    @Transactional
	@Override
	public int addFeedBack(Feedback feedback) throws InvalidRatingException{
    	Optional<Feedback> feedBackId =feedbackdao.findById(feedback.getFeedBackId());
    	if(feedback.getOverallRating() < 1) {
            throw new InvalidRatingException("Rating can't be less then 1");
        }
    	feedbackdao.saveAndFlush(feedback);
		return feedback.getFeedBackId();
	}
    
    
    @Transactional
	@Override
	public Feedback updateFeedback(Feedback feedback) {

    	Optional<Feedback> previousFeed=feedbackdao.findById(feedback.getFeedBackId());
    	Feedback fupdate=previousFeed.get();
    	fupdate.setDriverRating(feedback.getDriverRating());
    	fupdate.setServiceRating(feedback.getServiceRating());
    	fupdate.setOverallRating(feedback.getOverallRating());
    	fupdate.setComments(feedback.getComments());
    	fupdate.setFeedbackdate(feedback.getFeedbackdate());
		return fupdate;
	}

	@Override
	public void deleteFeedbackById(int id) {
		
		feedbackdao.deleteById(id);
		
	}
}
