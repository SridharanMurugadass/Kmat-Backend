package com.kmat.service.controller;

import java.util.List;
import java.util.Optional;

import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.kmat.service.dao.ProfileDao;
import com.kmat.service.model.Profile;
import com.kmat.service.model.User;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.client.FindIterable;

@RestController
public class ProfileController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	MongoTemplate mongoTemplate;

	@Autowired
	ProfileDao dao;

	@CrossOrigin
	@PostMapping("/saveProfile")
	public Profile saveProfile(@RequestBody Profile profile) {

		LOGGER.debug("Id: {}, Profile: {}", profile.getProfileId());

		return dao.saveProfile(profile);

	}

	@CrossOrigin
	@GetMapping("/getProfile")
	public List<Profile> getProfile() {

		LOGGER.debug("Came Inside getProfile");

		return dao.getProfile();

	}

	@CrossOrigin
	@GetMapping("/getProfile/{id}")
	public Optional<Profile> getProfileById(@PathVariable String id) {

		LOGGER.debug("Came Inside getProfileById" + id);

		return dao.getProfileById(id);

	}
	
	@CrossOrigin
	@GetMapping("/profileSearch/{id}")
	public List<Profile> primarySearch(@PathVariable String id) {

	  System.out.println("id"+id);

		return mongoTemplate.find(
				Query.query(new Criteria().andOperator((Criteria.where("_id").is(id)))),
				Profile.class);
		
	}
	

	
}