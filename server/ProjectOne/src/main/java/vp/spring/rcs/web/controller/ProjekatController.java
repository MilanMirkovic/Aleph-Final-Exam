package vp.spring.rcs.web.controller;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.Komentar;
import vp.spring.rcs.model.Projekat;
import vp.spring.rcs.service.KomentarService;
import vp.spring.rcs.service.ProjekatService;
import vp.spring.rcs.web.dto.KomentarDTO;
import vp.spring.rcs.web.dto.ProjekatDTO;

@RestController
public class ProjekatController {

	
	@Autowired
	ProjekatService projekatService;
	
	@Autowired
	KomentarService komentarService;

	@GetMapping(value="api/projekti")
	public ResponseEntity<Page<ProjekatDTO>> getAll(Pageable page){
		
		Page<Projekat> projekti=projekatService.getPage(page);
		
		List<ProjekatDTO> dto=projekti.getContent().stream().map(p -> new ProjekatDTO(p)).collect(Collectors.toList());
		
		Page<ProjekatDTO> retVal=new PageImpl<>(dto,page,projekti.getTotalElements());
		
		
		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}


	@GetMapping(value="api/projekti/{id}")
	public ResponseEntity<ProjekatDTO> getOne(@PathVariable Long id){
		
		Projekat projekat=projekatService.findOne(id);
		List<Komentar> komentari=komentarService.komentariOdProjekta(id);
		
		
		Set<KomentarDTO> komentariDTO=komentari.stream().map(k -> new KomentarDTO(k)).collect(Collectors.toSet());
		
		if(projekat  == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		ProjekatDTO projekatDTO=new ProjekatDTO(projekat);
		projekatDTO.setKomentari(komentariDTO);
		
		return new ResponseEntity<>(projekatDTO, HttpStatus.OK);
	
	
	}
	
	 @PreAuthorize("isAuthenticated()")
	@PutMapping(value="api/projekti/{id}")
	public ResponseEntity<ProjekatDTO> update(@PathVariable Long id, @RequestBody ProjekatDTO projekatDto ){
		
	
		Projekat projekat= projekatService.findOne(id);
		
		projekat.setId(projekatDto.getId());
		projekat.setNaziv(projekatDto.getNaziv());
		projekat.setOpis(projekatDto.getOpis());
		projekat.setReadMe(projekatDto.getReadMe());
		
		
		projekat=projekatService.save(projekat);
		
		
			
		return new ResponseEntity<>( new ProjekatDTO(projekat), HttpStatus.OK);
	}
	
	
	@GetMapping(value="api/projekti/filter")
	public ResponseEntity<Page<ProjekatDTO>> filiterByNaziv(@RequestParam String naziv, Pageable page){
		
		Page<Projekat> projekti=projekatService.findByNaziv(page, naziv);
		
		List<ProjekatDTO> dto=projekti.getContent().stream().map(p->new ProjekatDTO(p)).collect(Collectors.toList());
		
		Page<ProjekatDTO> retVal=new PageImpl<>(dto,page,projekti.getTotalElements());
		

		return new ResponseEntity<>(retVal, HttpStatus.OK);
		
	}
	
	 @PreAuthorize("isAuthenticated()")
	@DeleteMapping(value="api/projekti/{id}")
	public ResponseEntity<Void> deleteProjekat(@PathVariable Long id){
		Projekat projekat=projekatService.findOne(id);
		if(projekat != null) {
			projekatService.delete(projekat);
			return new ResponseEntity<>( HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
		}
	}
	
	
	@PostMapping(value = "api/projekti/komentar")
	public ResponseEntity<KomentarDTO> createComment(@RequestBody KomentarDTO dto) {
		Komentar komentar=new Komentar();

		Projekat projekat= projekatService.findOne(dto.getProjekat().getId());
		komentar.setDownVote(dto.getDownVote());
		komentar.setUpVote(dto.getUpVote());
		komentar.setImeKorisnika(dto.getImeKorisnika());
		komentar.setProjekat(projekat);
		komentar.setKomentar(dto.getKomentar());
		
		
		
		komentar=komentarService.save(komentar);
		

		return new ResponseEntity<>(new KomentarDTO(komentar), HttpStatus.OK);

	}
	
	 @PreAuthorize("isAuthenticated()")
	@PostMapping(value="api/projekti")
	public ResponseEntity<ProjekatDTO> create(@RequestBody ProjekatDTO projekatDto ){
		Projekat projekat= new Projekat();
		if(projekatDto.getId()==0) {
		
		projekat.setNaziv(projekatDto.getNaziv());
		projekat.setOpis(projekatDto.getOpis());
		projekat.setReadMe(projekatDto.getReadMe());
		
		
		projekat=projekatService.save(projekat);
		}
		
			
		return new ResponseEntity<>( new ProjekatDTO(projekat), HttpStatus.OK);
	}
	
	 
	 //izmena komentara za dodavanje upvote i downvote
	 @PutMapping(value="api/prorjekti/komentar/{id}")
	
	 public ResponseEntity<KomentarDTO> updateComment(@PathVariable Long id,@RequestBody KomentarDTO dto) {
		 
		 
		 
			Komentar komentar=komentarService.findOne(id);
		
			Projekat projekat= projekatService.findOne(dto.getProjekat().getId());
			
			komentar.setUser(dto.getUser());
			komentar.setDownVote(dto.getDownVote());
			komentar.setUpVote(dto.getUpVote());
			komentar.setImeKorisnika(dto.getImeKorisnika());
			komentar.setProjekat(projekat);
			komentar.setKomentar(dto.getKomentar());
			
			
			
			komentar=komentarService.save(komentar);
			

			return new ResponseEntity<>(new KomentarDTO(komentar), HttpStatus.OK);

		}
}
