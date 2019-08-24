package vp.spring.rcs.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.KomentarRepository;

import vp.spring.rcs.model.Komentar;
import vp.spring.rcs.model.Projekat;

@Component
public class KomentarService {

	@Autowired
	KomentarRepository repository;

	@Autowired
	ProjekatService projekatService;

	public List<Komentar> findAll() {
		return repository.findAll();
	}

	public Page<Komentar> getPage(Pageable page) {
		return repository.findAll(page);

	}

	public Komentar findOne(Long id) {
		return repository.getOne(id);
	}

	public Komentar save(Komentar class2) {
		return repository.save(class2);
	}

	public void delete(Komentar class2) {
		repository.delete(class2);
	}

	public List<Komentar> komentariOdProjekta(Long id) {

		List<Komentar> retVal = new ArrayList<>();

		Projekat projekat = projekatService.findOne(id);

		for (Komentar k : projekat.getKomentari()) {

			retVal.add(k);

		}

		return retVal;
	}

}
