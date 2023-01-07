package com.cg.service;

import java.util.List;

import javax.validation.Valid;

import com.cg.entity.Login;

public interface LoginService {
	int addLogin(com.cg.entity.@Valid Login login);

	Login updateLogin(@Valid Login login);

	List<Login> showLogin();

	void deleteloginById(int loginId);


}
