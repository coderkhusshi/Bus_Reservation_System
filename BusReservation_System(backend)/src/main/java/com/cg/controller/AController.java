package com.cg.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/controller")
public class AController {
	@GetMapping(value="/show")
	String controllerMessage()
	{
	  
	    return "This is rest api call";
	}
	
	@PostMapping(value="/save")
	String controllerMessagePost()
	{
	    
	    return "This is post rest api call";
	}
	
	@PutMapping (value="/put")
	String controllerMessagePut()
	{
	   
	    return "This is rest api call for put";
	}
	
	@DeleteMapping(value="/delete")
	String controllerMessageDelete()
	{
	   
	    return "this is rest api called for delete";
	}

}
