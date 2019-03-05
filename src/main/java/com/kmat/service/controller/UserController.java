package com.kmat.service.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;
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
import org.springframework.web.client.RestTemplate;

import com.kmat.service.model.User;
import com.kmat.service.repository.UserRepo;
import com.kmat.service.utils.HashingService;
import org.apache.commons.lang3.StringUtils;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@RestController
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	MongoTemplate mongoTemplate;

	@Autowired
	UserRepo repo;

	@CrossOrigin
	@PostMapping("/signUp")
	public User signUp(@RequestBody User user) {

		LOGGER.debug("email: {}, mobile: {}", user.getEmail(), user.getMobile());

		user.setPassword(HashingService.encodeValue(user.getPassword()));

		Date date = new Date();

		user.setCreatedDate(date);

		repo.save(user);

		return user; // registration success

	}

	@CrossOrigin
	@PostMapping("/signIn")
	public Optional<User> signIn(@RequestBody User user) {

		LOGGER.debug("email: {}, mobile: {}", user.getEmail(), user.getMobile());

		user.setPassword(HashingService.encodeValue(user.getPassword()));

		if (!StringUtils.isBlank(user.getEmail())) {

			List<User> data = mongoTemplate.find(Query.query(new Criteria().orOperator((Criteria.where("email")
					.is(user.getEmail()).andOperator(Criteria.where("password").is(user.getPassword()))))), User.class);

			if (!data.isEmpty()) {

				return getValueById(data.get(0).getMobile(), user.getPassword(), user);
			}

			return null; // data not found

		}

		return getValueById(user.getMobile(), user.getPassword(), user);

	}

	@CrossOrigin
	@GetMapping("/getUser/{id}")
	public Optional<User> getUserById(@PathVariable String id) {

		Optional<User> data = repo.findById(id);

		data.get().setPassword(null);

		return data;
	}

	@CrossOrigin
	@GetMapping("/emailCheck/{id}")
	public Boolean emailCheck(@PathVariable String id) {

		List<User> data = mongoTemplate.find(Query.query(new Criteria().orOperator((Criteria.where("email").is(id)))),
				User.class);

		if (data.isEmpty()) {

			return false;
		}

		return true;

	}

	@CrossOrigin
	@GetMapping("/mobileCheck/{id}")
	public Boolean mobileCheck(@PathVariable String id) {

		List<User> mobile = mongoTemplate
				.find(Query.query(new Criteria().orOperator((Criteria.where("mobile").is(id)))), User.class);

		if (mobile.isEmpty()) {

			return false;
		}

		return true;

	}

	private Optional<User> getValueById(String id, String password, User user) {

		Optional<User> check = repo.findById(id);

		if (check.isPresent()) {

			if (check.get().getPassword().equals(password)) {

				return check; // password matches
			}

			return null; // password doesn't matches

		}

		return null; // data not found

	}

	@CrossOrigin
	@GetMapping("/emaiVerify/{id}")
	public Optional<User> emaiVerify(@PathVariable String id) {

		return null;
	}
	
	
	@CrossOrigin
	@PostMapping("/saveData")
	public User save(@RequestBody String json) throws ParseException {
		
		JSONParser parser = new JSONParser(); 
		JSONArray data = (JSONArray) parser.parse(json);
		JSONObject register = (JSONObject) data.get(0);
		JSONObject payment = (JSONObject) data.get(1);
		
		register.putAll(payment);
		
		RestTemplate restTemplate = new RestTemplate();
	    User usr = restTemplate.postForObject( "https://kmat.herokuapp.com/signUp", register, User.class);
		
		return usr;
	}
	

}
