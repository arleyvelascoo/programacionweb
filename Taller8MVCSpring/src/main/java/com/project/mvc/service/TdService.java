package com.project.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.mvc.model.TipoDeDocumento;
import com.project.mvc.repo.TdRepo;

@Service
public class TdService {
	
	@Autowired
	private TdRepo repo;
	
	public TipoDeDocumento getDTypeById(int id) {
		return repo.findById(id).orElse(null);
	}
	
	public List<TipoDeDocumento> getDTypes(){
		return repo.findAll();
	}
}
