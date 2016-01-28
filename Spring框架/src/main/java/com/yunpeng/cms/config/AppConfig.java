/**
 * 
 */
package com.yunpeng.cms.config;

import java.util.Map;

import javax.inject.Inject;
import javax.persistence.EntityManagerFactory;

import org.apache.commons.lang3.StringUtils;
import org.glassfish.jersey.server.mvc.MvcFeature;
import org.hibernate.SessionFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jersey.JerseyProperties;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.hibernate4.HibernateExceptionTranslator;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

import com.yunpeng.core.jpa.DefaultJpaRepository;

/**
 * @author iDay
 *
 */
@EnableJpaAuditing
@EntityScan("com.yunpeng.**.model")
@SpringBootApplication(scanBasePackages = { "com.yunpeng" },exclude={SecurityAutoConfiguration.class})
@EnableJpaRepositories(basePackages = { "com.yunpeng.**.dao" }, repositoryBaseClass = DefaultJpaRepository.class)
public class AppConfig {

	@Inject
	private EntityManagerFactory entityManagerFactory;

	@Bean
	public SessionFactory sessionFactory() {
		HibernateJpaSessionFactoryBean factoryBean = new HibernateJpaSessionFactoryBean();
		factoryBean.setEntityManagerFactory(entityManagerFactory);
		return factoryBean.getObject();
	}

	@Bean
	public PlatformTransactionManager transactionManager() {
		JpaTransactionManager txManager = new JpaTransactionManager();
		txManager.setEntityManagerFactory(entityManagerFactory);
		return txManager;
	}



}
