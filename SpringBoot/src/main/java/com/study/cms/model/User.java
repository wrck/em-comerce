package com.study.cms.model;

import javax.persistence.Cacheable;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.ws.rs.FormParam;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Cacheable
public class User extends BaseModel {
	/**
	 * 
	 */
	private static final long serialVersionUID = -5585108476095742537L;

	@FormParam("username")
	private String username;
	@FormParam("realname")
	private String realname;
	@FormParam("nickname") 
	private String nickname;
	@FormParam("phone")
	private String phone;
	@FormParam("email")
	private String email;
	@FormParam("avatar")
	private String avatar;
	@FormParam("locked")
	private boolean locked;
	@FormParam("enabled")
	private boolean enabled;
	
	public User() {
		super();
	}
	public User(Long id) {
		super(id);
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public boolean isLocked() {
		return locked;
	}
	public void setLocked(boolean locked) {
		this.locked = locked;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	
}