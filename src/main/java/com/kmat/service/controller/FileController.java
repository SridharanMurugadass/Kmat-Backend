package com.kmat.service.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import javax.servlet.ServletContext;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.kmat.service.model.Profile;
import com.kmat.service.repository.ProfileRepo;
import com.kmat.service.utils.FileUtil;

@RestController
public class FileController {
	private static final Logger LOGGER = LoggerFactory.getLogger(FileController.class);

	@Autowired private ProfileRepo profileRepo;
	
	@Autowired
	ServletContext servletContext;
	
	@CrossOrigin
	@PostMapping(path = "/fileUpload/{profileId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public void uploadProfileImage(@RequestParam("file") MultipartFile file, @PathVariable("profileId") String profileId) {
		
		System.out.println("profileId"+profileId);
		
		
		if (StringUtils.isBlank(profileId)) {
			// TODO: throw error
		}
		
		if (file == null || file.getSize() <= 0) {
			// TODO: throw error
		}
		
		Optional<Profile> profileOpt = profileRepo.findById(profileId);
		
		if (! profileOpt.isPresent()) { /*TODO throw error*/ }
		
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
	
	@GetMapping("/getFile/{profileId}")
	public List<String> getFile(@PathVariable String profileId){
		
		Optional<Profile> prof = profileRepo.findById(profileId);
		
		Profile profile = prof.get();
		
		
		return profile.getImagePaths();
	}
	
	@RequestMapping(value = "/image/{profileId}", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable String profileId) throws IOException {

    	Optional<Profile> prof = profileRepo.findById(profileId);
		
		Profile profile = prof.get();
    	
        FileInputStream imgFile = new FileInputStream(profile.getImagePaths().get(3));
        byte[] bytes = StreamUtils.copyToByteArray(imgFile);

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(bytes);
    }
	
	
}