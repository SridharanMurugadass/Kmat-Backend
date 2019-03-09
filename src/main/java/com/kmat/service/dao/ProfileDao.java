package com.kmat.service.dao;

import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kmat.service.model.Profile;
import com.kmat.service.repository.ProfileRepo;

@Service
public class ProfileDao {

	private static final Logger LOGGER = LoggerFactory.getLogger(ProfileDao.class);

	@Autowired
	ProfileRepo profileRepo;

	public Optional<Profile> getProfileById(String id) {

		LOGGER.debug("Id: {}, Profile: {}", id);

		return profileRepo.findById(id);
	}

	public List<Profile> getProfile() {

		LOGGER.debug("Came Inside getProfile");

		return profileRepo.findAll();
	}

	public Profile saveProfile(Profile profile) {

		LOGGER.debug("Came Inside getProfile");

		Profile prof = profileRepo.save(profile);
		
		return prof;
	}

}
