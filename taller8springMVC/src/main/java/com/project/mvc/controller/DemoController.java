package com.project.mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.project.mvc.model.Ciudad;
import com.project.mvc.model.Persona;
import com.project.mvc.model.TipoDeDocumento;
import com.project.mvc.service.CiudadService;
import com.project.mvc.service.PersonaService;
import com.project.mvc.service.TdService;

@Controller
public class DemoController {
	@Autowired
	PersonaService personService;
	
	@Autowired
	CiudadService city;
	
	@Autowired
	TdService td;
	
	@GetMapping("/")
	public String home() {
		return "greeting";	
	}
	
	@GetMapping("/list")
	public String list(Model model) {
		List<Persona> listadoPersonas = personService.getPersons();
		model.addAttribute("personas", listadoPersonas);
		return "listar";
	}
	
	@GetMapping("/create")
	public String crear(Model model) {
		Persona person = new Persona();
		List<Ciudad> cities = city.getCities();
		List<TipoDeDocumento> tds = td.getDTypes();
		model.addAttribute("cities", cities);
		model.addAttribute("tds", tds);
		model.addAttribute("person", person);
		return "crear";
	}
	
	@GetMapping("/edit/{id}")
	public String editarr(@PathVariable("id") int idPerson, Model model) {
		Persona person = personService.getPersonById(idPerson);
		List<Ciudad> cities = city.getCities();
		List<TipoDeDocumento> tds = td.getDTypes();
		model.addAttribute("cities", cities);
		model.addAttribute("tds", tds);
		model.addAttribute("person", person);
		return "crear";
	}
	
	@GetMapping("/delete/{id}")
	public String eliminar(@PathVariable("id") int idPerson) {
		personService.deletePersonById(idPerson);
		return "redirect:/list";
	}
	
	@PostMapping("/save")
	public String save(@ModelAttribute Persona persona) {
		personService.updatePerson(persona);
		return "redirect:/list";
	}
	
	
	
}
