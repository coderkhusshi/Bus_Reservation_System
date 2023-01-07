package com.cg.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(BusIdNotFoundException.class)
	public ResponseEntity<ExceptionResponse> BusIdNotFoundException(BusIdNotFoundException e) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("CONFLICT");
		response.setErrorMessage(e.getMessage());
		response.setTimestamp(LocalDateTime.now());
		ResponseEntity<ExceptionResponse> responseEntity = new ResponseEntity<ExceptionResponse>(response,
				HttpStatus.CONFLICT);
		return responseEntity;

	}

	@ExceptionHandler(InvalidDataInput.class)
	public ResponseEntity<ExceptionResponse> InvalidDataInput(InvalidDataInput e) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("CONFLICT");
		response.setErrorMessage(e.getMessage());
		response.setTimestamp(LocalDateTime.now());
		ResponseEntity<ExceptionResponse> responseEntity = new ResponseEntity<ExceptionResponse>(response,
				HttpStatus.CONFLICT);
		return responseEntity;

	}

	@ExceptionHandler(InvalidRatingException.class)
	public ResponseEntity<ExceptionResponse> InvalidRatingException(InvalidRatingException e) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("CONFLICT");
		response.setErrorMessage(e.getMessage());
		response.setTimestamp(LocalDateTime.now());
		ResponseEntity<ExceptionResponse> responseEntity = new ResponseEntity<ExceptionResponse>(response,
				HttpStatus.CONFLICT);
		return responseEntity;

	}

	@ExceptionHandler(InvalidContactNumber.class)
	public ResponseEntity<ExceptionResponse> InvalidContactNumber(InvalidContactNumber e) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("CONFLICT");
		response.setErrorMessage(e.getMessage());
		response.setTimestamp(LocalDateTime.now());
		ResponseEntity<ExceptionResponse> responseEntity = new ResponseEntity<ExceptionResponse>(response,
				HttpStatus.CONFLICT);
		return responseEntity;

	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> handleValidationExceptions(MethodArgumentNotValidException exception3){
        ExceptionResponse response2=new ExceptionResponse();
        Map<String, String> errors = new HashMap<>();
        exception3.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);});
        System.out.println("/n Keys:");
        String errormessage = null;
    for(String key:errors.keySet()) {
        System.out.println(key);
        System.out.println(errors.get(key));
        errormessage=errors.get(key);}
        response2.setErrorCode("UNSUPPORTED_MEDIA_TYPE");
        response2.setErrorMessage(errormessage);
        response2.setTimestamp(LocalDateTime.now());
        ResponseEntity<ExceptionResponse> responseEntyity=new ResponseEntity<ExceptionResponse>(response2,HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        return responseEntyity;
    }

	

}