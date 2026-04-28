package com.buslocator.backend.service;

import com.buslocator.backend.entity.Itineraire;
import com.buslocator.backend.entity.User;
import com.buslocator.backend.entity.ArretBus;
import com.buslocator.backend.repository.ItineraireRepository;
import com.buslocator.backend.repository.UserRepository;
import com.buslocator.backend.repository.ArretBusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ItineraireService {

    private final ItineraireRepository itineraireRepository;
    private final UserRepository userRepository;
    private final ArretBusRepository arretBusRepository;

    public Itineraire sauvegarderItineraire(Long idUtilisateur, Long idDepart, Long idDestination, Double distance, Integer duree) {
        User utilisateur = userRepository.findById(idUtilisateur)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        ArretBus depart = arretBusRepository.findById(idDepart)
                .orElseThrow(() -> new RuntimeException("Arrêt départ non trouvé"));
        ArretBus destination = arretBusRepository.findById(idDestination)
                .orElseThrow(() -> new RuntimeException("Arrêt destination non trouvé"));
        Itineraire itineraire = Itineraire.builder()
                .utilisateur(utilisateur)
                .arretDepart(depart)
                .arretDestination(destination)
                .distance(distance)
                .dureeEstimee(duree)
                .build();
        return itineraireRepository.save(itineraire);
    }

    public List<Itineraire> historique(Long idUtilisateur) {
        return itineraireRepository.findByUtilisateurId(idUtilisateur);
    }
}