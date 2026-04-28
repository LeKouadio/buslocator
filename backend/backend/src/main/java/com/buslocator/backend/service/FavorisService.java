package com.buslocator.backend.service;

import com.buslocator.backend.entity.Favoris;
import com.buslocator.backend.entity.User;
import com.buslocator.backend.entity.ArretBus;
import com.buslocator.backend.repository.FavorisRepository;
import com.buslocator.backend.repository.UserRepository;
import com.buslocator.backend.repository.ArretBusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FavorisService {

    private final FavorisRepository favorisRepository;
    private final UserRepository userRepository;
    private final ArretBusRepository arretBusRepository;

    public Favoris ajouterFavoris(Long idUtilisateur, Long idArret, String alias) {
        if (favorisRepository.existsByUtilisateurIdAndArretId(idUtilisateur, idArret)) {
            throw new RuntimeException("Cet arrêt est déjà dans vos favoris");
        }
        User utilisateur = userRepository.findById(idUtilisateur)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        ArretBus arret = arretBusRepository.findById(idArret)
                .orElseThrow(() -> new RuntimeException("Arrêt non trouvé"));
        Favoris favoris = Favoris.builder()
                .utilisateur(utilisateur)
                .arret(arret)
                .alias(alias)
                .build();
        return favorisRepository.save(favoris);
    }

    public void supprimerFavoris(Long idUtilisateur, Long idArret) {
        favorisRepository.deleteByUtilisateurIdAndArretId(idUtilisateur, idArret);
    }

    public List<Favoris> consulterFavoris(Long idUtilisateur) {
        return favorisRepository.findByUtilisateurId(idUtilisateur);
    }
}