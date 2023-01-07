package com.cg.service;

import java.util.List;

import com.cg.entity.User;
import com.cg.exception.InvalidContactNumber;

public interface UserService {
	
	List<User> showUser();

	int addUser(User user)throws InvalidContactNumber;

	User updateUser(User user);

	void deleteuserByID(int userId);
}
