package com.project.mvc.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.mvc.model.TipoDeDocumento;

public interface TdRepo extends JpaRepository<TipoDeDocumento, Integer>{
	
}