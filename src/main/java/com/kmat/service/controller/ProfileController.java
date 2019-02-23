package com.kmat.service.controller;

import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kmat.service.model.Profile;
import com.kmat.service.repository.ProfileRepo;

@RestController
public class ProfileController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	MongoTemplate mongoTemplate;

	@Autowired
	ProfileRepo profileRepo;

	@PostMapping("/saveProfile")
	public Profile saveProfile(@RequestBody Profile profile) {

		LOGGER.debug("Id: {}, Profile: {}", profile.getProfileId());

		return profileRepo.save(profile);

	}

	@GetMapping("/getProfile")
	public List<Profile> getProfile() {

		LOGGER.debug("Came Inside getProfile");

		return profileRepo.findAll();

	}
	
	@GetMapping("/getProfile/{id}")
	public Optional<Profile> getProfileById(@PathVariable String id) {

		LOGGER.debug("Came Inside getProfileById" + id);

		return profileRepo.findById(id);

	}
	
	
	
	
	
	
	

}