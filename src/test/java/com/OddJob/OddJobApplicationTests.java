package com.OddJob;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.CoreMatchers.containsString;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class OddJobApplicationTests {

	@Autowired
	JobRepository jobRepository;

	@Autowired
	ApplicationRepository applicationRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	MockMvc mvc;

	@Autowired
	ObjectMapper mapper;

	@Test
	public void testPostNewJob() throws Exception{
		Job job = new Job("Electrician");

		mvc.perform(MockMvcRequestBuilders.post("/jobs")
				.content(mapper.writeValueAsString(job))
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().is2xxSuccessful())
				.andExpect(MockMvcResultMatchers.content().string(containsString("Electrician")));

	}

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
	public void testNewUser() throws Exception {
		User user = new User("Daniel");

		mvc.perform(MockMvcRequestBuilders.post("/users")
				.content(mapper.writeValueAsString(user))
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().is2xxSuccessful())
				.andExpect(MockMvcResultMatchers.content().string(containsString("Daniel")));

	}

}
