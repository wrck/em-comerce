package com.study.cms.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.ws.rs.FormParam;

@Entity
public class test {
	@Id
	@FormParam("testname")
	private String testname;
	@OneToOne
	@JoinColumn(updatable =false)
	private User user;
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getTestname() {
		return testname;
	}

	public void setTestname(String testname) {
		this.testname = testname;
	}
	
	
}
