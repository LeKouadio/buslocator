package com.buslocator.backend.repository;

import com.buslocator.backend.entity.Itineraire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ItineraireRepository extends JpaRepository<Itineraire, Long> {
    List<Itineraire> findByUtilisateurId(Long idUtilisateur);
}