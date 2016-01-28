/**
 * 
 */
package com.study.cms.service;

import javax.inject.Inject;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.study.cms.dao.AccountRepository;
import com.study.cms.model.Account;
import com.study.cms.vo.LoginUser;

/**
 * @author iDay
 *
 */
@Service
public class AccountService extends AbstractService implements UserDetailsService {
	
	@Inject
	private AccountRepository accountRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountRepository.findOne(username);
		if (account == null) {
			throw new UsernameNotFoundException("username is not found");
		}
		return new LoginUser(account);
	}

}
