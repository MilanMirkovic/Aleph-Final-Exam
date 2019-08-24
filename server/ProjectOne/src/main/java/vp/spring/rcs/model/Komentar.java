package vp.spring.rcs.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import vp.spring.rcs.model.user.SecurityUser;

@Entity
@Table(catalog = "projekti")
public class Komentar {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	private String imeKorisnika;
	
	@ManyToOne
	private Projekat projekat;
	
	@ManyToOne
	SecurityUser user;
	
	private String komentar;
	
	int upVote;
	int downVote;

	public Komentar(Long id, String imeKorisnika, Projekat projekat, String komentar) {
		super();
		this.id = id;
		this.imeKorisnika = imeKorisnika;
		this.projekat = projekat;
		this.komentar = komentar;
	}
	
	

	public Komentar(Long id, String imeKorisnika, Projekat projekat, String komentar, int upVote, int downVote) {
		super();
		this.id = id;
		this.imeKorisnika = imeKorisnika;
		this.projekat = projekat;
		this.komentar = komentar;
		this.upVote = upVote;
		this.downVote = downVote;
	}
	
	

	


	public SecurityUser getUser() {
		return user;
	}



	public void setUser(SecurityUser user) {
		this.user = user;
	}



	public Komentar(Long id, String imeKorisnika, Projekat projekat, SecurityUser user, String komentar, int upVote,
			int downVote) {
		super();
		this.id = id;
		this.imeKorisnika = imeKorisnika;
		this.projekat = projekat;
		this.user = user;
		this.komentar = komentar;
		this.upVote = upVote;
		this.downVote = downVote;
	}



	public int getUpVote() {
		return upVote;
	}



	public void setUpVote(int upVote) {
		this.upVote = upVote;
	}



	public int getDownVote() {
		return downVote;
	}



	public void setDownVote(int downVote) {
		this.downVote = downVote;
	}



	public Komentar() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImeKorisnika() {
		return imeKorisnika;
	}

	public void setImeKorisnika(String imeKorisnika) {
		this.imeKorisnika = imeKorisnika;
	}

	public Projekat getProjekat() {
		return projekat;
	}

	public void setProjekat(Projekat projekat) {
		this.projekat = projekat;
	}

	public String getKomentar() {
		return komentar;
	}

	public void setKomentar(String komentar) {
		this.komentar = komentar;
	}


	
	

}
