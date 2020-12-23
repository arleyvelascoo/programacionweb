package com.project.mvc.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.mvc.model.Persona;

public interface PersonaRepo extends JpaRepository<Persona, Integer>{
	
}
