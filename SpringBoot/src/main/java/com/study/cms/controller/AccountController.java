/**
 * 
 */
package com.study.cms.controller;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.BeanParam;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.study.cms.dao.AccountRepository;
import com.study.cms.model.Account;
import com.study.cms.model.User;
import com.study.cms.service.AbstractService;

/**
 * @author iDay
 *
 */
@Path("/account")
@Controller
public class AccountController extends AbstractService {

	@Inject
	private AccountRepository repository;
	private PasswordEncoder passwordEncoder;
	
	public Account find(@QueryParam("username") String username) {
		return this.repository.findOne(username);
	}
	
	@POST
	@Transactional
	public Account create(@BeanParam Account account, @FormParam("username")  String username) {
		Account a = this.find(username);
		if (a != null) {
			a.setUsername(account.getUsername());
			a.setPassword(account.getPassword());
		} else {
			a = account;
		}
		this.repository.save(a);
		return a;
	}
	
}
