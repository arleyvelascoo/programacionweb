package com.project.mvc.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.mvc.model.Ciudad;

public interface CiudadRepo extends JpaRepository<Ciudad, Integer>{
	
}
