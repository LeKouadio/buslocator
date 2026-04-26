package com.buslocator.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Itineraire_Arret")
public class ItineraireArret {

    @EmbeddedId
    private ItineraireArretId id;

    @ManyToOne
    @MapsId("idItineraire")
    @JoinColumn(name = "idItineraire")
    private Itineraire itineraire;

    @ManyToOne
    @MapsId("idArret")
    @JoinColumn(name = "idArret")
    private ArretBus arret;

    @Column(nullable = false)
    private Integer ordrePassage;
}