package vp.spring.rcs.web.dto;

import vp.spring.rcs.model.Komentar;
import vp.spring.rcs.model.user.SecurityUser;

public class KomentarDTO {
	
	Long id;
	private String imeKorisnika;
	
	private ProjekatDTO projekat;
	private String komentar;

	int upVote;
	int downVote;
	
	SecurityUser user;


	
	public KomentarDTO(Komentar komentar) {
		
		this.id=komentar.getId();
		this.user=komentar.getUser();
		this.imeKorisnika=komentar.getImeKorisnika();
		this.projekat=new ProjekatDTO(komentar.getProjekat());
		this.komentar=komentar.getKomentar();
		this.upVote=komentar.getUpVote();
		this.downVote=komentar.getDownVote();
	}

	


	public KomentarDTO() {
		super();
	}




	public SecurityUser getUser() {
		return user;
	}




	public void setUser(SecurityUser user) {
		this.user = user;
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



	public ProjekatDTO getProjekat() {
		return projekat;
	}



	public void setProjekat(ProjekatDTO projekat) {
		this.projekat = projekat;
	}



	public String getKomentar() {
		return komentar;
	}



	public void setKomentar(String komentar) {
		this.komentar = komentar;
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
	
	
}
