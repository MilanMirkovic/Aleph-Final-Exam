package vp.spring.rcs.web.dto;

import java.util.HashSet;
import java.util.Set;

import vp.spring.rcs.model.Komentar;
import vp.spring.rcs.model.Projekat;

public class ProjekatDTO {

Long id;
	
	private String naziv;
	private String opis;

	private String readMe;
	

	//TODO staviti u DTO
	Set<KomentarDTO> komentari= new HashSet<>();
	
	public ProjekatDTO(Projekat projekat) {
		this.id=projekat.getId();
		this.naziv=projekat.getNaziv();
		this.opis=projekat.getOpis();
		this.readMe=projekat.getReadMe();
		
	}
	

	public ProjekatDTO() {
		super();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getReadMe() {
		return readMe;
	}

	public void setReadMe(String readMe) {
		this.readMe = readMe;
	}

	public Set<KomentarDTO> getKomentari() {
		return komentari;
	}

	public void setKomentari(Set<KomentarDTO> komentari) {
		this.komentari = komentari;
	}
	
	
}
