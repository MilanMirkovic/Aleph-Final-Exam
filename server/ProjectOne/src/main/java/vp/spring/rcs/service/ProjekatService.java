package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.ProjekatRepository;
import vp.spring.rcs.model.Projekat;
import vp.spring.rcs.model.Komentar;

@Component
public class ProjekatService {

	@Autowired
	ProjekatRepository repository;
	
	
	public List<Projekat> findAll(){
		return repository.findAll();
	}
	
	public Page<Projekat> getPage(Pageable page){
		return repository.findAll(page);
		
	}
	
	public Projekat findOne(Long id) {
		return repository.getOne(id);
	}
	
	public Projekat save (Projekat projekat) {
		return repository.save(projekat);
	}
	
	
	public void delete(Projekat projekat ) {
		repository.delete(projekat);
	}
	
	public Page<Projekat> findByNaziv(Pageable page, String naziv){
		return repository.findByNazivContaining(page, naziv);
	}
}
