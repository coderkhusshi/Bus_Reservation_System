package com.cg.service;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entity.User;
import com.cg.exception.InvalidContactNumber;
import com.cg.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userdao;

	@Transactional
	@Override
	public List<User> showUser() {
		return userdao.findAll();
	}

	@Transactional
	@Override
	public int addUser(User user) throws InvalidContactNumber {
		Optional<User> userId = userdao.findById(user.getUserId());
		Long contact = user.getContact();
		String con = contact + "";
		if (con.length() != 10) {
			throw new InvalidContactNumber("Invalid contactnumber");
		}
		userdao.saveAndFlush(user);
		return user.getUserId();

	}

	@Override
	public User updateUser(User user) {
		Optional<User> previousUser = userdao.findById(user.getUserId());
		User uupdated = previousUser.get();
		uupdated.setFirstName(user.getFirstName());
		return uupdated;

	}

	@Override
	public void deleteuserByID(int userId) {
		Optional<User> Userr = userdao.findById(userId);
        if(Userr.isPresent()) {
            User use=Userr.get();
//            use.setReservation(null);
		    userdao.deleteById(userId);

	}
  }
}
