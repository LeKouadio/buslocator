package com.buslocator.backend.controller;

import com.buslocator.backend.entity.Favoris;
import com.buslocator.backend.service.FavorisService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoris")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FavorisController {

    private final FavorisService favorisService;

    @PostMapping("/{idUtilisateur}/{idArret}")
    public ResponseEntity<Favoris> ajouterFavoris(
            @PathVariable Long idUtilisateur,
            @PathVariable Long idArret,
            @RequestParam(required = false) String alias) {
        return ResponseEntity.ok(favorisService.ajouterFavoris(idUtilisateur, idArret, alias));
    }

    @DeleteMapping("/{idUtilisateur}/{idArret}")
    public ResponseEntity<Void> supprimerFavoris(
            @PathVariable Long idUtilisateur,
            @PathVariable Long idArret) {
        favorisService.supprimerFavoris(idUtilisateur, idArret);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{idUtilisateur}")
    public ResponseEntity<List<Favoris>> consulterFavoris(@PathVariable Long idUtilisateur) {
        return ResponseEntity.ok(favorisService.consulterFavoris(idUtilisateur));
    }
}