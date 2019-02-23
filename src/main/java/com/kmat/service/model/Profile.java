package com.kmat.service.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;

public class Profile {
@Id
	private String profileId;
	private String placeOfBirth;

	public String getProfileId() {
		return profileId;
	}

	public void setProfileId(String profileId) {
		this.profileId = profileId;
	}

	private String timeOfBirth;
	private String faceComplex;

	public String getPlaceOfBirth() {
		return placeOfBirth;
	}

	public void setPlaceOfBirth(String placeOfBirth) {
		this.placeOfBirth = placeOfBirth;
	}

	public String getTimeOfBirth() {
		return timeOfBirth;
	}

	public void setTimeOfBirth(String timeOfBirth) {
		this.timeOfBirth = timeOfBirth;
	}

	public String getFaceComplex() {
		return faceComplex;
	}

	public void setFaceComplex(String faceComplex) {
		this.faceComplex = faceComplex;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getBodyType() {
		return bodyType;
	}

	public void setBodyType(String bodyType) {
		this.bodyType = bodyType;
	}

	public String getFoodHabits() {
		return foodHabits;
	}

	public void setFoodHabits(String foodHabits) {
		this.foodHabits = foodHabits;
	}

	public String getCommunity() {
		return community;
	}

	public void setCommunity(String community) {
		this.community = community;
	}

	public String getKootam() {
		return kootam;
	}

	public void setKootam(String kootam) {
		this.kootam = kootam;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getCurrentCity() {
		return currentCity;
	}

	public void setCurrentCity(String currentCity) {
		this.currentCity = currentCity;
	}

	public String getMaritalStatuss() {
		return maritalStatuss;
	}

	public void setMaritalStatuss(String maritalStatuss) {
		this.maritalStatuss = maritalStatuss;
	}

	public String getNoOfChildren() {
		return noOfChildren;
	}

	public void setNoOfChildren(String noOfChildren) {
		this.noOfChildren = noOfChildren;
	}

	public String getFamilyType() {
		return familyType;
	}

	public void setFamilyType(String familyType) {
		this.familyType = familyType;
	}

	public String getFamilyStatus() {
		return familyStatus;
	}

	public void setFamilyStatus(String familyStatus) {
		this.familyStatus = familyStatus;
	}

	public String getFamilyValues() {
		return familyValues;
	}

	public void setFamilyValues(String familyValues) {
		this.familyValues = familyValues;
	}

	public String getPhysicalStatus() {
		return physicalStatus;
	}

	public void setPhysicalStatus(String physicalStatus) {
		this.physicalStatus = physicalStatus;
	}

	public String getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(String annualIncome) {
		this.annualIncome = annualIncome;
	}

	public String getPrefferedLocation() {
		return prefferedLocation;
	}

	public void setPrefferedLocation(String prefferedLocation) {
		this.prefferedLocation = prefferedLocation;
	}

	public String getNoOfSiblings() {
		return noOfSiblings;
	}

	public void setNoOfSiblings(String noOfSiblings) {
		this.noOfSiblings = noOfSiblings;
	}

	public String getSiblingsMaritalStatus() {
		return siblingsMaritalStatus;
	}

	public void setSiblingsMaritalStatus(String siblingsMaritalStatus) {
		this.siblingsMaritalStatus = siblingsMaritalStatus;
	}

	public String getFatherOccupation() {
		return fatherOccupation;
	}

	public void setFatherOccupation(String fatherOccupation) {
		this.fatherOccupation = fatherOccupation;
	}

	public String getFatherContactNo() {
		return fatherContactNo;
	}

	public void setFatherContactNo(String fatherContactNo) {
		this.fatherContactNo = fatherContactNo;
	}

	public List<String> getImagePaths() {
		return imagePaths;
	}

	public void setImagePaths(List<String> imagePaths) {
		this.imagePaths = imagePaths;
	}

	public void appendImagePath(String imagePath) {
		if (this.imagePaths == null) {
			this.imagePaths = new ArrayList<>();
		}
		this.imagePaths.add(imagePath);
	}

	private String height;
	private String weight;
	private String bodyType;
	private String foodHabits;
	private String community;
	private String kootam;
	private String education;
	private String occupation;
	private String currentCity;
	private String maritalStatuss;
	private String noOfChildren;
	private String familyType;
	private String familyStatus;
	private String familyValues;
	private String physicalStatus;
	private String annualIncome;
	private String prefferedLocation;
	private String noOfSiblings;
	private String siblingsMaritalStatus;
	private String fatherOccupation;
	private String fatherContactNo;
	private List<String> imagePaths;
}