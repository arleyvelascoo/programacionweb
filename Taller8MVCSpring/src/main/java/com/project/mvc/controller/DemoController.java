package com.project.mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.mvc.model.Persona;
import com.project.mvc.service.PersonaService;

@Controller
public class DemoController {
	@Autowired
	PersonaService person;
	
	@GetMapping("/")
	public String list(Model model) {
		List<Persona> listadoPersonas = person.getPersons();
		model.addAttribute("personas", listadoPersonas);
		return "listar";
	}
	
}
