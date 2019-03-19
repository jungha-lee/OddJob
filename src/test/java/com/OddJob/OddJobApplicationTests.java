package com.OddJob;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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
		Assert.assertEquals("test to find all users", 4, users.size());
	}

	@Test
	public void testGetAllApplications() {
		List<Application> applications = (List<Application>) applicationRepository.findAll();
		Assert.assertEquals("test to find all applications", 3, applications.size());
	}

	@Test
	public void testGetApplicationByID() {
		Application application = applicationRepository.findById(1L).get();
		Assert.assertEquals("test to find application with id = 1", "I would love to, got lots of experience", application.getApplicantMsg());
	}

	@Test
	public void testGetUserFromApplication() {
		String applicatFirstName = applicationRepository.findById(1L).get().getApplicantId().getFirstName();
		Assert.assertEquals("Pamela", applicatFirstName);
	}

	@Test
	public void testNewUser() {
		userRepository.save(new User("anatoli@gmail.com", "pass", "Anatoli", "Vahterov", "222222220", null, null));
		String name = userRepository.findById(5L).get().getFirstName();
		Assert.assertEquals("Anatoli", name);
	}

}
