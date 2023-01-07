package com.cg.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    int admintId;
    String adminUsername;
    String adminPassword;
    public int getAdmintId() {
        return admintId;
    }
    public void setAdmintId(int admintId) {
        this.admintId = admintId;
    }
    public String getAdminUsername() {
        return adminUsername;
    }
    public void setAdminUsername(String adminUsername) {
        this.adminUsername = adminUsername;
    }
    public String getAdminPassword() {
        return adminPassword;
    }
    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }
	

}
