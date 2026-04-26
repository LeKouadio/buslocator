package com.buslocator.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Itineraire")
public class Itineraire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Double distance;

    @Column(nullable = false)
    private Integer dureeEstimee;

    @ManyToOne
    @JoinColumn(name = "idUtilisateur", nullable = false)
    private User utilisateur;

    @ManyToOne
    @JoinColumn(name = "idArretDepart", nullable = false)
    private ArretBus arretDepart;

    @ManyToOne
    @JoinColumn(name = "idArretDestination", nullable = false)
    private ArretBus arretDestination;

@Builder.Default
@OneToMany(mappedBy = "itineraire", cascade = CascadeType.ALL, orphanRemoval = true)
private List<ItineraireArret> arrets = new ArrayList<>();

    @Column(name = "createdAt")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}