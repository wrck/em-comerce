/**
 * 
 */
package com.study.cms.security;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.study.cms.model.User;
import com.study.cms.vo.LoginUser;

/**
 * @author iDay
 *
 */
public class SpringSecurityAuditorAware implements AuditorAware<User> {

	@Override
	public User getCurrentAuditor() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

	    if (authentication == null || !authentication.isAuthenticated()) {
	      return null;
	    }
	    
	    if (authentication.getPrincipal() instanceof LoginUser) {
	    	return ((LoginUser) authentication.getPrincipal()).getUser();
	    }
	    return null;
	}

}
