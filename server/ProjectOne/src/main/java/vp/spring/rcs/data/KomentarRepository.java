package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Komentar;

@Component
public interface KomentarRepository extends JpaRepository<Komentar, Long> {

}
