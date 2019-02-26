package com.kmat.service.controller;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Locale;
import java.util.Optional;

import javax.swing.filechooser.FileNameExtensionFilter;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kmat.service.exception.AppException;
import com.kmat.service.exception.ErrorCode;
import com.kmat.service.exception.ResponseStatusCode;
import com.kmat.service.model.Profile;
import com.kmat.service.repository.ProfileRepo;
import com.kmat.service.utils.FileUtil;

@RestController
public class FileController {
	private static final Logger LOGGER = LoggerFactory.getLogger(FileController.class);

	@Autowired private ProfileRepo profileRepo;
	
	@PostMapping(path = "/profiles/{profileId}/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public void uploadProfileImage(@RequestParam("file") MultipartFile file, @PathVariable("profileId") String profileId, Locale locale) throws Exception {
		
		if (StringUtils.isBlank(profileId)) {
			throw new AppException(ResponseStatusCode.NOT_FOUND, ErrorCode.ENTITY_NOT_FOUND, locale);
		}
		
		if (file == null || file.getSize() <= 0) {
			// TODO: throw error
		}
		
		Optional<Profile> profileOpt = profileRepo.findById(profileId);
		
		if (! profileOpt.isPresent()) { 
			throw new AppException(ResponseStatusCode.NOT_FOUND, ErrorCode.ENTITY_NOT_FOUND, locale, "Profile");
		}
		
		String pathname = profileId + "-" + (new Date()).getTime() + "."+getExtensionByStringHandling(file.getOriginalFilename());
		
		System.out.println("pathname"+pathname);
		try {
			File createdFile = FileUtil.create(pathname, file.getBytes());
		} catch (IOException e) {
			// TODO throw error
		}
		Profile profile = profileOpt.get();
		profile.appendImagePath(pathname);
		
		profileRepo.save(profile);
	}
	
	
	public String getExtensionByStringHandling(String filename) {
	    return Optional.ofNullable(filename)
	      .filter(f -> f.contains("."))
	      .map(f -> f.substring(filename.lastIndexOf(".") + 1)).get();
	}
}