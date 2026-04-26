package com.buslocator.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Favoris", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"idUtilisateur", "idArret"})
})
public class Favoris {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "dateAjout")
    private LocalDateTime dateAjout;

    private String alias;

    @ManyToOne
    @JoinColumn(name = "idUtilisateur", nullable = false)
    private User utilisateur;

    @ManyToOne
    @JoinColumn(name = "idArret", nullable = false)
    private ArretBus arret;

    @PrePersist
    protected void onCreate() {
        dateAjout = LocalDateTime.now();
    }
}