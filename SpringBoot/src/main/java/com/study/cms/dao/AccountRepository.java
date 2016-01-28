/**
 * 
 */
package com.study.cms.dao;

import javax.persistence.QueryHint;

import org.springframework.data.jpa.repository.QueryHints;

import com.study.cms.model.Account;
import com.study.cms.model.User;

/**
 * @author iDay
 *
 */
public interface AccountRepository extends HibernateBasedRepository<Account, String> {

	@QueryHints(@QueryHint(name = org.hibernate.jpa.QueryHints.HINT_CACHEABLE, value = "true"))
	Account findByUser(User user);

	@QueryHints(@QueryHint(name = org.hibernate.jpa.QueryHints.HINT_CACHEABLE, value = "true"))
	Account findByUserId(long uid);
}
