package com.buslocator.backend.controller;

import com.buslocator.backend.entity.Itineraire;
import com.buslocator.backend.service.ItineraireService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itineraires")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ItineraireController {

    private final ItineraireService itineraireService;

    @PostMapping("/{idUtilisateur}")
    public ResponseEntity<Itineraire> sauvegarder(
            @PathVariable Long idUtilisateur,
            @RequestParam Long idDepart,
            @RequestParam Long idDestination,
            @RequestParam Double distance,
            @RequestParam Integer duree) {
        return ResponseEntity.ok(itineraireService.sauvegarderItineraire(idUtilisateur, idDepart, idDestination, distance, duree));
    }

    @GetMapping("/{idUtilisateur}")
    public ResponseEntity<List<Itineraire>> historique(@PathVariable Long idUtilisateur) {
        return ResponseEntity.ok(itineraireService.historique(idUtilisateur));
    }
}