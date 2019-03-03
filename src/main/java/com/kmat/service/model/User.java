package com.kmat.service.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class User {

	@Id
	private String mobile;
	private String firstname;
	private String lastname;
	private String email;
	public Date getChequeNumber() {
		return chequeNumber;
	}

	public void setChequeNumber(Date chequeNumber) {
		this.chequeNumber = chequeNumber;
	}

	public Date getBankName() {
		return bankName;
	}

	public void setBankName(Date bankName) {
		this.bankName = bankName;
	}

	public Date getBranchName() {
		return branchName;
	}

	public void setBranchName(Date branchName) {
		this.branchName = branchName;
	}

	public Date getAmount() {
		return amount;
	}

	public void setAmount(Date amount) {
		this.amount = amount;
	}

	private Date createdDate;
	private Date chequeNumber;
	private Date bankName;
	private Date branchName;
	private Date amount;
	

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	private boolean agreementFlag;

	public boolean isAgreementFlag() {
		return agreementFlag;
	}

	public void setAgreementFlag(boolean agreementFlag) {
		this.agreementFlag = agreementFlag;
	}

	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	private Date expiryDate;

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	private String password;

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	private String role;
	private boolean accFlag;

	public boolean isAccFlag() {
		return accFlag;
	}

	public void setAccFlag(boolean accFlag) {
		this.accFlag = accFlag;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
}
