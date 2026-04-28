package com.buslocator.backend.controller;

import com.buslocator.backend.entity.LigneDeBus;
import com.buslocator.backend.entity.LigneArret;
import com.buslocator.backend.service.LigneDeBusService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lignes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class LigneDeBusController {

    private final LigneDeBusService ligneDeBusService;

    @PostMapping("/admin/{idAdmin}")
    public ResponseEntity<LigneDeBus> creerLigne(@RequestBody LigneDeBus ligne, @PathVariable Long idAdmin) {
        return ResponseEntity.ok(ligneDeBusService.creerLigne(ligne, idAdmin));
    }

    @PutMapping("/admin/{id}")
    public ResponseEntity<LigneDeBus> modifierLigne(@PathVariable Long id, @RequestBody LigneDeBus ligne) {
        return ResponseEntity.ok(ligneDeBusService.modifierLigne(id, ligne));
    }

    @DeleteMapping("/admin/{id}")
    public ResponseEntity<Void> supprimerLigne(@PathVariable Long id) {
        ligneDeBusService.supprimerLigne(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/rechercher")
    public ResponseEntity<List<LigneDeBus>> rechercherParNom(@RequestParam String nom) {
        return ResponseEntity.ok(ligneDeBusService.rechercherParNom(nom));
    }

    @GetMapping
    public ResponseEntity<List<LigneDeBus>> toutesLesLignes() {
        return ResponseEntity.ok(ligneDeBusService.toutesLesLignes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LigneDeBus> getLigne(@PathVariable Long id) {
        return ResponseEntity.ok(ligneDeBusService.getLigne(id));
    }

    @PostMapping("/{idLigne}/arrets/{idArret}")
    public ResponseEntity<Void> ajouterArretALigne(
            @PathVariable Long idLigne,
            @PathVariable Long idArret,
            @RequestParam Integer ordre) {
        ligneDeBusService.ajouterArretALigne(idLigne, idArret, ordre);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{idLigne}/arrets/{idArret}")
    public ResponseEntity<Void> retirerArretDeLigne(
            @PathVariable Long idLigne,
            @PathVariable Long idArret) {
        ligneDeBusService.retirerArretDeLigne(idLigne, idArret);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{idLigne}/arrets")
    public ResponseEntity<List<LigneArret>> getArretsDeLigne(@PathVariable Long idLigne) {
        return ResponseEntity.ok(ligneDeBusService.getArretsDeLigne(idLigne));
    }
}