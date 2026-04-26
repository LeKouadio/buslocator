package com.buslocator.backend.repository;

import com.buslocator.backend.entity.LigneArret;
import com.buslocator.backend.entity.LigneArretId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LigneArretRepository extends JpaRepository<LigneArret, LigneArretId> {
    List<LigneArret> findByLigneIdOrderByOrdrePassageAsc(Long idLigne);
    List<LigneArret> findByArretIdOrderByOrdrePassageAsc(Long idArret);
}