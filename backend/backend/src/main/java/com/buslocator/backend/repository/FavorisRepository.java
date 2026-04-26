package com.buslocator.backend.repository;

import com.buslocator.backend.entity.Favoris;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris, Long> {

    List<Favoris> findByUtilisateurId(Long idUtilisateur);

    Optional<Favoris> findByUtilisateurIdAndArretId(Long idUtilisateur, Long idArret);

    boolean existsByUtilisateurIdAndArretId(Long idUtilisateur, Long idArret);

    @Transactional
    void deleteByUtilisateurIdAndArretId(Long idUtilisateur, Long idArret);
}