-- ============================================
-- Base de données : babibus
-- ============================================
CREATE DATABASE IF NOT EXISTS babibus;
USE babibus;

-- ============================================
-- Table : utilisateur
-- ============================================
CREATE TABLE utilisateur (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'UTILISATEUR',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- Table : administrateur
-- ============================================
CREATE TABLE administrateur (
    id BIGINT PRIMARY KEY,
    matricule VARCHAR(50) NOT NULL UNIQUE,
    FOREIGN KEY (id) REFERENCES utilisateur(id) ON DELETE CASCADE
);

-- ============================================
-- Table : arret_bus
-- ============================================
CREATE TABLE arret_bus (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom_arret VARCHAR(255) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    adresse VARCHAR(255),
    id_admin BIGINT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_admin) REFERENCES administrateur(id)
);

-- ============================================
-- Table : ligne_de_bus
-- ============================================
CREATE TABLE ligne_de_bus (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    numero VARCHAR(20) NOT NULL UNIQUE,
    nom_ligne VARCHAR(255) NOT NULL,
    id_admin BIGINT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_admin) REFERENCES administrateur(id)
);

-- ============================================
-- Table d'association : ligne_arret
-- ============================================
CREATE TABLE ligne_arret (
    id_ligne BIGINT NOT NULL,
    id_arret BIGINT NOT NULL,
    ordre_passage INT NOT NULL,
    PRIMARY KEY (id_ligne, id_arret),
    FOREIGN KEY (id_ligne) REFERENCES ligne_de_bus(id) ON DELETE CASCADE,
    FOREIGN KEY (id_arret) REFERENCES arret_bus(id) ON DELETE CASCADE
);

-- ============================================
-- Table : favoris
-- ============================================
CREATE TABLE favoris (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    date_ajout DATETIME DEFAULT CURRENT_TIMESTAMP,
    alias VARCHAR(255),
    id_utilisateur BIGINT NOT NULL,
    id_arret BIGINT NOT NULL,
    UNIQUE KEY unique_favori (id_utilisateur, id_arret),
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id) ON DELETE CASCADE,
    FOREIGN KEY (id_arret) REFERENCES arret_bus(id) ON DELETE CASCADE
);

-- ============================================
-- Table : itineraire
-- ============================================
CREATE TABLE itineraire (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    distance DOUBLE NOT NULL,
    duree_estimee INT NOT NULL,
    id_utilisateur BIGINT NOT NULL,
    id_arret_depart BIGINT NOT NULL,
    id_arret_destination BIGINT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id) ON DELETE CASCADE,
    FOREIGN KEY (id_arret_depart) REFERENCES arret_bus(id),
    FOREIGN KEY (id_arret_destination) REFERENCES arret_bus(id)
);

-- ============================================
-- Table d'association : itineraire_arret
-- ============================================
CREATE TABLE itineraire_arret (
    id_itineraire BIGINT NOT NULL,
    id_arret BIGINT NOT NULL,
    ordre_passage INT NOT NULL,
    PRIMARY KEY (id_itineraire, id_arret),
    FOREIGN KEY (id_itineraire) REFERENCES itineraire(id) ON DELETE CASCADE,
    FOREIGN KEY (id_arret) REFERENCES arret_bus(id) ON DELETE CASCADE
);
show tables;