package com.study.cms.model;

import javax.persistence.Cacheable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.ws.rs.FormParam;

@Entity
@Cacheable
public class Account {
	@Id
	@FormParam("username")
	private String username;
	@FormParam("password")
	private String password;
	@OneToOne
	@JoinColumn(updatable = false)
	private User user;
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getUsername(){
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public void setUsername(String username) {
		this.username = username;
	}
}
