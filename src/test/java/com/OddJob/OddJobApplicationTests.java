package com.OddJob;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OddJobApplicationTests {

	@Autowired
	MockMvc mvc;

	@Test
	public void contextLoads() {
	}

	@Test
	public void testGetAllJobs() {

	}

}
