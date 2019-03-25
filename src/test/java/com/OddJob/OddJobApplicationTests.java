package com.OddJob;

import com.fasterxml.jackson.core.JsonProcessingException;
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
	public void testGetJobsPostedByUser() {
		List<Job> jobs = jobRepository.findByOwner_Id(4L);
		Assert.assertEquals("test to find jobs posted by LARS", 2, jobs.size());
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
	public void testGetJobIdByApplicantId() {
		User user = userRepository.findById(2L).get();
		List<Application> objects = applicationRepository.findJob_IdByApplicantId(user);
        System.out.println(objects.get(0).getClass());
        System.out.println(objects.get(1).getApplicantId().getFirstName());
        System.out.println(objects.get(1).getApplicantId().toString());
        System.out.println(objects);
        System.out.println(objects);
		Assert.assertEquals("test to find jobs by applicant ID", 2, objects.size());
	}

	@Test
    public void testGetJobsAppliedByUser() throws Exception {
	    User user = userRepository.findById(2L).get();

	    mvc.perform(MockMvcRequestBuilders.get("/applications/2")
            .content(mapper.writeValueAsString(user))
            .contentType(MediaType.APPLICATION_JSON_UTF8))
            .andExpect(status().is2xxSuccessful())
            .andExpect(MockMvcResultMatchers.content().string(containsString("Painting")));
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

	@Test
	public void testPostApplication() throws Exception {
		Application application = new Application("status");

		mvc.perform(MockMvcRequestBuilders.post("/applications")
				.content(mapper.writeValueAsString(application))
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().is2xxSuccessful())
				.andExpect(MockMvcResultMatchers.content().string(containsString("status")));
	}

	@Test
	public void removeApplication() throws Exception {
		List<Application> applications = (List<Application>) applicationRepository.findAll();
		Assert.assertEquals(8, applications.size());

		applicationRepository.deleteById(1L);
		applications = (List<Application>) applicationRepository.findAll();
		Assert.assertEquals(7, applications.size());
	}

}
