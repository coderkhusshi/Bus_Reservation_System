package com.cg.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="login")
@JsonIdentityInfo(
		 generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "loginid")
public class Login {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
int loginid;
String username;
String password;

//@OneToOne(mappedBy="login")
//User user;

public int getLoginid() {
	return loginid;
}

public void setLoginid(int loginid) {
	this.loginid = loginid;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

//public User getUser() {
//	return user;
//}
//
//public void setUser(User user) {
//	this.user = user;
//}

//@Override


}
