package com.buslocator.backend.service;

import com.buslocator.backend.entity.ArretBus;
import com.buslocator.backend.entity.Administrateur;
import com.buslocator.backend.repository.AdministrateurRepository;
import com.buslocator.backend.repository.ArretBusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ArretBusService {

    private final ArretBusRepository arretBusRepository;
    private final AdministrateurRepository administrateurRepository;

    public ArretBus creerArret(ArretBus arret, Long idAdmin) {
        Administrateur admin = administrateurRepository.findById(idAdmin)
                .orElseThrow(() -> new RuntimeException("Administrateur non trouvé"));
        arret.setAdmin(admin);
        return arretBusRepository.save(arret);
    }

    public ArretBus modifierArret(Long id, ArretBus nouveau) {
        ArretBus arret = arretBusRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Arrêt non trouvé"));
        arret.setNomArret(nouveau.getNomArret());
        arret.setLatitude(nouveau.getLatitude());
        arret.setLongitude(nouveau.getLongitude());
        arret.setAdresse(nouveau.getAdresse());
        return arretBusRepository.save(arret);
    }

    public void supprimerArret(Long id) {
        arretBusRepository.deleteById(id);
    }

    public List<ArretBus> rechercherParNom(String nom) {
        return arretBusRepository.findByNomArretContainingIgnoreCase(nom);
    }

    public List<ArretBus> localiserArretsProches(Double lat, Double lng, Double rayon) {
        return arretBusRepository.findArretsProchesByPosition(lat, lng, rayon);
    }

    public List<ArretBus> tousLesArrets() {
        return arretBusRepository.findAll();
    }

    public ArretBus getArret(Long id) {
        return arretBusRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Arrêt non trouvé"));
    }
}