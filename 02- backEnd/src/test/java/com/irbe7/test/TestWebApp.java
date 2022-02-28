package com.irbe7.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

//import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import org.junit.*;

public class TestWebApp extends TestApplicationTests {
	
	
	@Autowired
	private WebApplicationContext webApplicationContext;

	private MockMvc mockMvc;

	@org.junit.Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}

	@Test
	public void testStudent() throws Exception {
		mockMvc.perform(get("/students"))
				.andExpect(jsonPath("$.firstName").value("Rahma")).andExpect(jsonPath("$.lastName").value("Sakka"))
				.andExpect(jsonPath("$.email").value("rahmasakka982@gmail.com"));

	}

}