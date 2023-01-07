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

import com.cg.entity.User;
import com.cg.exception.InvalidContactNumber;
import com.cg.service.UserService;


@RestController
@CrossOrigin
@RequestMapping(path = "/user")

public class UserController {
	 @Autowired
	    UserService usService;

	   @GetMapping(produces = "application/json")
	    List<User> showUser() {
	        List<User> userList = usService.showUser();
	        Iterator<User> user = userList.iterator();
	       while (user.hasNext()) {
	            System.out.println(user.next());
	        }
	        return userList;
	    }


	   @PostMapping( consumes = "application/json", produces = "application/json")
	    ResponseEntity<User> addCu(@Valid@RequestBody User user)throws InvalidContactNumber{
	        int userId = usService.addUser(user);
	        long usercontact= user.getContact();
	        String con=usercontact+"";
	    	if(con.length()!=10)
	    	{
	    		throw new  InvalidContactNumber("Invalid contact number");
	    	}
	        return ResponseEntity.ok(user);
	    }



	   @PutMapping( consumes = "application/json", produces = "application/json")
	    ResponseEntity<User> updateUser(@Valid@RequestBody User user) {
	        User u = usService.updateUser(user);
	        return new ResponseEntity<User>(u, HttpStatus.ACCEPTED);
	    }



	   @DeleteMapping("/{userId} ")
	    ResponseEntity deleteUser(@PathVariable("userId") int userId) {
	        usService.deleteuserByID(userId);
	        return new ResponseEntity("User with ID" + userId + "is deleted", HttpStatus.OK);



	   }

}
