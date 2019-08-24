package vp.spring.rcs.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(catalog = "projekti")
public class Projekat {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	private String naziv;
	private String opis;
	@Column(columnDefinition="varchar(955)")
	private String readMe;
	
	
	@OneToMany(mappedBy="projekat", cascade= CascadeType.REMOVE)
	Set<Komentar> komentari= new HashSet<>();

	public Projekat(Long id, String naziv, String opis, String readMe) {
		super();
		this.id = id;
		this.naziv = naziv;
		this.opis = opis;
		this.readMe = readMe;
	}
	
	

	public Projekat() {
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

	public Set<Komentar> getKomentari() {
		return komentari;
	}

	public void setKomentari(Set<Komentar> komentari) {
		this.komentari = komentari;
	}
	
	
	
	

}
