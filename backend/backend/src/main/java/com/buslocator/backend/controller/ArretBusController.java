package com.buslocator.backend.controller;

import com.buslocator.backend.entity.ArretBus;
import com.buslocator.backend.service.ArretBusService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/arrets")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ArretBusController {

    private final ArretBusService arretBusService;

    // Créer un arrêt (admin)
    @PostMapping("/admin/{idAdmin}")
    public ResponseEntity<ArretBus> creerArret(@RequestBody ArretBus arret, @PathVariable Long idAdmin) {
        return ResponseEntity.ok(arretBusService.creerArret(arret, idAdmin));
    }

    // Modifier un arrêt (admin)
    @PutMapping("/admin/{id}")
    public ResponseEntity<ArretBus> modifierArret(@PathVariable Long id, @RequestBody ArretBus arret) {
        return ResponseEntity.ok(arretBusService.modifierArret(id, arret));
    }

    // Supprimer un arrêt (admin)
    @DeleteMapping("/admin/{id}")
    public ResponseEntity<Void> supprimerArret(@PathVariable Long id) {
        arretBusService.supprimerArret(id);
        return ResponseEntity.noContent().build();
    }

    // Rechercher par nom
    @GetMapping("/rechercher")
    public ResponseEntity<List<ArretBus>> rechercherParNom(@RequestParam String nom) {
        return ResponseEntity.ok(arretBusService.rechercherParNom(nom));
    }

    // Localiser les arrêts proches
    @GetMapping("/proches")
    public ResponseEntity<List<ArretBus>> localiserArretsProches(
            @RequestParam Double lat,
            @RequestParam Double lng,
            @RequestParam(defaultValue = "5") Double rayon) {
        return ResponseEntity.ok(arretBusService.localiserArretsProches(lat, lng, rayon));
    }

    // Tous les arrêts
    @GetMapping
    public ResponseEntity<List<ArretBus>> tousLesArrets() {
        return ResponseEntity.ok(arretBusService.tousLesArrets());
    }

    // Un arrêt par ID
    @GetMapping("/{id}")
    public ResponseEntity<ArretBus> getArret(@PathVariable Long id) {
        return ResponseEntity.ok(arretBusService.getArret(id));
    }
}