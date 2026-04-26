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
@Table(name = "Ligne_Arret")
public class LigneArret {

    @EmbeddedId
    private LigneArretId id;

    @ManyToOne
    @MapsId("idLigne")
    @JoinColumn(name = "idLigne")
    private LigneDeBus ligne;

    @ManyToOne
    @MapsId("idArret")
    @JoinColumn(name = "idArret")
    private ArretBus arret;

    @Column(nullable = false)
    private Integer ordrePassage;
}