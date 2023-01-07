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

import com.cg.entity.Login;
import com.cg.service.LoginService;

@RestController
@CrossOrigin
@RequestMapping(value = "/login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	// http://localhost:8081/BusApp/login

	@GetMapping(produces = "application/json")
	List<Login> showLogin() {
		List<Login> loginList = loginService.showLogin();
		Iterator<Login> login = loginList.iterator();
		while (login.hasNext()) {
			login.next();

		}
		return loginList;

	}
	// http://localhost:8081/BusApp/login

	@PostMapping( consumes = "application/json", produces = "application/json")
	ResponseEntity<Login> addLogin(@Valid @RequestBody Login login)  {
		@SuppressWarnings("unused")
		int loginId = loginService.addLogin(login);
		return ResponseEntity.ok(login);
	}

	// http://localhost:8081/BusApp/login

	@PutMapping( consumes = "application/json", produces = "application/json")
	ResponseEntity<Login> updateLogin(@Valid @RequestBody Login login) {
		Login s = loginService.updateLogin(login);
		return new ResponseEntity<Login>(s, HttpStatus.ACCEPTED);

	}

	// http://localhost:8081/BusApp/login/id
	@SuppressWarnings({ "rawtypes", "unchecked" })

	@DeleteMapping("/{loginId}")
	ResponseEntity deleLogin(@PathVariable("loginId") int loginId) {
		loginService.deleteloginById(loginId);
		return new ResponseEntity("feedback with Id" + loginId + "is deleted", HttpStatus.OK);
	}


}
