package com.project.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.mvc.model.Ciudad;
import com.project.mvc.repo.CiudadRepo;

@Service
public class CiudadService {
	@Autowired
	private CiudadRepo repo;
	
	public Ciudad getCityById(int id) {
		return repo.findById(id).orElse(null);
	}
	
	public List<Ciudad> getCities() {
		return repo.findAll();
	}
}
