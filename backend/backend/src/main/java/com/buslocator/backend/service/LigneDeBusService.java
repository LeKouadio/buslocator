package com.buslocator.backend.service;

import com.buslocator.backend.entity.LigneArretId;
import com.buslocator.backend.entity.LigneDeBus;
import com.buslocator.backend.entity.Administrateur;
import com.buslocator.backend.entity.LigneArret;
import com.buslocator.backend.entity.ArretBus;
import com.buslocator.backend.repository.LigneDeBusRepository;
import com.buslocator.backend.repository.AdministrateurRepository;
import com.buslocator.backend.repository.LigneArretRepository;
import com.buslocator.backend.repository.ArretBusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LigneDeBusService {

    private final LigneDeBusRepository ligneDeBusRepository;
    private final AdministrateurRepository administrateurRepository;
    private final LigneArretRepository ligneArretRepository;
    private final ArretBusRepository arretBusRepository;

    public LigneDeBus creerLigne(LigneDeBus ligne, Long idAdmin) {
        Administrateur admin = administrateurRepository.findById(idAdmin)
                .orElseThrow(() -> new RuntimeException("Administrateur non trouvé"));
        ligne.setAdmin(admin);
        return ligneDeBusRepository.save(ligne);
    }

    public LigneDeBus modifierLigne(Long id, LigneDeBus nouveau) {
        LigneDeBus ligne = ligneDeBusRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ligne non trouvée"));
        ligne.setNumero(nouveau.getNumero());
        ligne.setNomLigne(nouveau.getNomLigne());
        return ligneDeBusRepository.save(ligne);
    }

    public void supprimerLigne(Long id) {
        ligneDeBusRepository.deleteById(id);
    }

    public List<LigneDeBus> rechercherParNom(String nom) {
        return ligneDeBusRepository.findByNomLigneContainingIgnoreCase(nom);
    }

    public List<LigneDeBus> toutesLesLignes() {
        return ligneDeBusRepository.findAll();
    }

    public LigneDeBus getLigne(Long id) {
        return ligneDeBusRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ligne non trouvée"));
    }

    public void ajouterArretALigne(Long idLigne, Long idArret, Integer ordre) {
        LigneDeBus ligne = ligneDeBusRepository.findById(idLigne)
                .orElseThrow(() -> new RuntimeException("Ligne non trouvée"));
        ArretBus arret = arretBusRepository.findById(idArret)
                .orElseThrow(() -> new RuntimeException("Arrêt non trouvé"));
        LigneArret ligneArret = LigneArret.builder()
                .id(new LigneArretId(idLigne, idArret))
                .ligne(ligne)
                .arret(arret)
                .ordrePassage(ordre)
                .build();
        ligneArretRepository.save(ligneArret);
    }

    public void retirerArretDeLigne(Long idLigne, Long idArret) {
        ligneArretRepository.deleteById(new LigneArretId(idLigne, idArret));
    }

    public List<LigneArret> getArretsDeLigne(Long idLigne) {
        return ligneArretRepository.findByLigneIdOrderByOrdrePassageAsc(idLigne);
    }
}