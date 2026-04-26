package com.buslocator.backend.repository;

import com.buslocator.backend.entity.ArretBus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ArretBusRepository extends JpaRepository<ArretBus, Long> {

    List<ArretBus> findByNomArretContainingIgnoreCase(String nom);

    @Query(value = """
        SELECT id, nomArret, latitude, longitude, adresse, idAdmin, createdAt, (
            6371 * acos(
                cos(radians(:lat)) * cos(radians(latitude)) *
                cos(radians(longitude) - radians(:lng)) +
                sin(radians(:lat)) * sin(radians(latitude))
            )
        ) AS distance
        FROM ArretBus
        HAVING distance <= :rayon
        ORDER BY distance ASC
        """, nativeQuery = true)
    List<ArretBus> findArretsProchesByPosition(
        @Param("lat") Double lat,
        @Param("lng") Double lng,
        @Param("rayon") Double rayon
    );
}