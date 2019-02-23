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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.kmat.service.model.User;
import com.kmat.service.repository.UserRepo;
import com.kmat.service.utils.HashingService;

@RestController
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	MongoTemplate mongoTemplate;

	@Autowired
	UserRepo repo;

	@PostMapping("/signUp")
	public String signUp(@RequestBody User user) {

		LOGGER.debug("email: {}, mobile: {}", user.getEmail(), user.getMobile());

		user.setPassword(HashingService.encodeValue(user.getPassword()));

		Date date = new Date();

		user.setDate(date);
		
		repo.save(user);

		return "1003"; // registration success

	}

	@PostMapping("/signIn")
	public String signIn(@RequestBody User user) {

		LOGGER.debug("email: {}, mobile: {}", user.getEmail(), user.getMobile());

		user.setPassword(HashingService.encodeValue(user.getPassword()));

		Optional<User> data = repo.findById(user.getMobile());

		System.out.println(data.toString());

		if (data.isPresent()) {

			System.out.println(data);

			if (data.get().getPassword().equals(user.getPassword())) {

				return "1001"; // password matches
			}

			return "1002"; // password doesn't matches

		}

		return "1004"; // data not found

	}

	@GetMapping("/getUser/{id}")
	public User getUserById(@PathVariable String id) {

		Optional<User> data = repo.findById(id);

		User usr = new User();
		usr.setEmail(data.get().getEmail());
		usr.setMobile(data.get().getMobile());
		usr.setFirstname(data.get().getFirstname());
		usr.setLastname(data.get().getLastname());
		usr.setRole(data.get().getRole());
		usr.setFlag(data.get().isFlag());
		usr.setDate(data.get().getDate());

		return usr;
	}

	@GetMapping("/emailCheck/{id}")
	public Boolean emailCheck(@PathVariable String id) {

		List<User> email = mongoTemplate.find(Query.query(new Criteria().orOperator((Criteria.where("email").is(id)))),
				User.class);

		if (email.isEmpty()) {

			return false;
		}

		return true;

	}

	@GetMapping("/mobileCheck/{id}")
	public Boolean mobileCheck(@PathVariable String id) {

		List<User> mobile = mongoTemplate
				.find(Query.query(new Criteria().orOperator((Criteria.where("mobile").is(id)))), User.class);

		if (mobile.isEmpty()) {

			return false;
		}

		return true;

	}

}
