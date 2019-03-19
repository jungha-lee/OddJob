package com.OddJob;

import org.h2.engine.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OddJobApplicationTests {

	@Autowired
	JobRepository jobRepository;

	@Autowired
	ApplicationRepository applicationRepository;

	@Autowired
	UserRepository userRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void testGetAllJobs() {
		List<Job> jobs = (List<Job>) jobRepository.findAll();
		Assert.assertEquals("test to find all jobs", 3, jobs.size());
	}

	@Test
	public void testGetAllUsers() {
		List<User> users = (List<User>) userRepository.findAll();
		Assert.assertEquals("test to find all jobs", 3, users.size());
	}

	@Test
	public void testGetAllApplications() {
		List<Application> applications = (List<Application>) applicationRepository.findAll();
		Assert.assertEquals("test to find all applications", 3, applications.size());
	}

	@Test
	public void testGetApplicationByID() {
		Application application = applicationRepository.findById(1L).get();
		Assert.assertEquals("test to find all applications", 3, application);
	}



}
