package com.cg.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entity.Login;
import com.cg.repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService {
	

	@Autowired
    LoginRepository logindao;
    
	@Transactional
	@Override
	public int addLogin(@Valid Login login) {
		@SuppressWarnings("unused")
		Optional<Login> loginId = logindao.findById(login.getLoginid());
		logindao.saveAndFlush(login);
		return login.getLoginid();
	}
	
	
    @Transactional
	@Override
	public Login updateLogin(@Valid Login login) {
		Optional<Login> previouslogin =logindao.findById(login.getLoginid());
		Login lupdate = previouslogin.get();
		lupdate.setUsername(login.getUsername());
		lupdate.setPassword(login.getPassword());
		
		return lupdate;
	}
    @Transactional
	@Override
	public List<Login> showLogin() {
		
		return logindao.findAll();
	}
    @Transactional
	@Override
	public void deleteloginById(int loginId) {
		logindao.deleteById(loginId);
		
	}


}
