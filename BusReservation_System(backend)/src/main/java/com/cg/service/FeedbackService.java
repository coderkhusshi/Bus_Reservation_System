package com.cg.service;

import java.util.List;

import com.cg.entity.Feedback;
import com.cg.exception.InvalidRatingException;

public interface FeedbackService {
	List<Feedback> showFeedback();
    int addFeedBack(Feedback feedback)throws InvalidRatingException;
    Feedback updateFeedback(Feedback feedback);
    void deleteFeedbackById(int id);
}
