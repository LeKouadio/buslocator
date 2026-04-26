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
@Table(name = "Administrateur")
public class Administrateur {

    @Id
    private Long id;

    @Column(nullable = false, unique = true)
    private String matricule;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private User user;
}