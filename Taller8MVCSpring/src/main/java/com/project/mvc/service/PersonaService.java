package com.project.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.mvc.model.Persona;
import com.project.mvc.repo.PersonaRepo;

@Service
public class PersonaService {
	@Autowired
	private PersonaRepo repository;
	
	public Persona savePerson(Persona persona) {
		return repository.save(persona);
	}
	
	public List<Persona> getPersons(){
		return repository.findAll();
	}
	
	public String deletePersonById(int id) {
		repository.deleteById(id);
		return "Removida correctamente" + id;
	}
	
	public Persona updatePerson(Persona persona) {
		Persona existingPerson = repository.findById(persona.getId()).orElse(null);
		existingPerson.setApellidos(persona.getApellidos());
		existingPerson.setCiudad(persona.getCiudad());
		existingPerson.setDocumento(persona.getDocumento());
		existingPerson.setEmail(persona.getEmail());
		existingPerson.setFechanacimiento(persona.getFechanacimiento());
		existingPerson.setNombres(persona.getNombres());
		existingPerson.setUsuario(persona.getUsuario());
		existingPerson.setPassword(persona.getPassword());
		existingPerson.setTelefono(persona.getTelefono());
		existingPerson.setTipodocumento(persona.getTipodocumento());
		return repository.save(existingPerson);
	}
}
