package com.buslocator.backend.repository;

import com.buslocator.backend.entity.LigneDeBus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface LigneDeBusRepository extends JpaRepository<LigneDeBus, Long> {
    Optional<LigneDeBus> findByNumero(String numero);
    boolean existsByNumero(String numero);
    List<LigneDeBus> findByNomLigneContainingIgnoreCase(String nom);
}