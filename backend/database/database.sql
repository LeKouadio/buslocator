-- ============================================
-- Base de données : babibus
-- ============================================
CREATE DATABASE IF NOT EXISTS babibus;
USE babibus;

-- ============================================
-- Table : Utilisateur
-- ============================================
CREATE TABLE Utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    motDePasse VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'UTILISATEUR',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- Table : Administrateur
-- ============================================
CREATE TABLE Administrateur (
    id INT PRIMARY KEY,
    matricule VARCHAR(50) NOT NULL UNIQUE,
    FOREIGN KEY (id) REFERENCES Utilisateur(id) ON DELETE CASCADE
);

-- ============================================
-- Table : ArretBus
-- ============================================
CREATE TABLE ArretBus (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nomArret VARCHAR(255) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    adresse VARCHAR(255),
    idAdmin INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idAdmin) REFERENCES Administrateur(id)
);

-- ============================================
-- Table : LigneDeBus
-- ============================================
CREATE TABLE LigneDeBus (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero VARCHAR(20) NOT NULL UNIQUE,
    nomLigne VARCHAR(255) NOT NULL,
    idAdmin INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idAdmin) REFERENCES Administrateur(id)
);

-- ============================================
-- Table d'association : Ligne_Arret
-- ============================================
CREATE TABLE Ligne_Arret (
    idLigne INT NOT NULL,
    idArret INT NOT NULL,
    ordrePassage INT NOT NULL,
    PRIMARY KEY (idLigne, idArret),
    FOREIGN KEY (idLigne) REFERENCES LigneDeBus(id) ON DELETE CASCADE,
    FOREIGN KEY (idArret) REFERENCES ArretBus(id) ON DELETE CASCADE
);

-- ============================================
-- Table : Favoris
-- ============================================
CREATE TABLE Favoris (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dateAjout DATETIME DEFAULT CURRENT_TIMESTAMP,
    alias VARCHAR(255),
    idUtilisateur INT NOT NULL,
    idArret INT NOT NULL,
    UNIQUE KEY unique_favori (idUtilisateur, idArret),
    FOREIGN KEY (idUtilisateur) REFERENCES Utilisateur(id) ON DELETE CASCADE,
    FOREIGN KEY (idArret) REFERENCES ArretBus(id) ON DELETE CASCADE
);

-- ============================================
-- Table : Itineraire
-- ============================================
CREATE TABLE Itineraire (
    id INT PRIMARY KEY AUTO_INCREMENT,
    distance DOUBLE NOT NULL,
    dureeEstimee INT NOT NULL,
    idUtilisateur INT NOT NULL,
    idArretDepart INT NOT NULL,
    idArretDestination INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUtilisateur) REFERENCES Utilisateur(id) ON DELETE CASCADE,
    FOREIGN KEY (idArretDepart) REFERENCES ArretBus(id),
    FOREIGN KEY (idArretDestination) REFERENCES ArretBus(id)
);

-- ============================================
-- Table d'association : Itineraire_Arret
-- ============================================
CREATE TABLE Itineraire_Arret (
    idItineraire INT NOT NULL,
    idArret INT NOT NULL,
    ordrePassage INT NOT NULL,
    PRIMARY KEY (idItineraire, idArret),
    FOREIGN KEY (idItineraire) REFERENCES Itineraire(id) ON DELETE CASCADE,
    FOREIGN KEY (idArret) REFERENCES ArretBus(id) ON DELETE CASCADE
);

use BabiBus ;
SHOW TABLES;
USE babibus;
ALTER TABLE Administrateur MODIFY COLUMN id BIGINT NOT NULL;
ALTER TABLE Utilisateur MODIFY COLUMN id BIGINT NOT NULL AUTO_INCREMENT;
ALTER TABLE Administrateur MODIFY COLUMN id BIGINT NOT NULL;
ALTER TABLE ArretBus MODIFY COLUMN id BIGINT NOT NULL AUTO_INCREMENT;
ALTER TABLE ArretBus MODIFY COLUMN idAdmin BIGINT NOT NULL;
ALTER TABLE LigneDeBus MODIFY COLUMN id BIGINT NOT NULL AUTO_INCREMENT;
ALTER TABLE LigneDeBus MODIFY COLUMN idAdmin BIGINT NOT NULL;
ALTER TABLE Favoris MODIFY COLUMN id BIGINT NOT NULL AUTO_INCREMENT;
ALTER TABLE Favoris MODIFY COLUMN idUtilisateur BIGINT NOT NULL;
ALTER TABLE Favoris MODIFY COLUMN idArret BIGINT NOT NULL;
ALTER TABLE Ligne_Arret MODIFY COLUMN idLigne BIGINT NOT NULL;
ALTER TABLE Ligne_Arret MODIFY COLUMN idArret BIGINT NOT NULL;
ALTER TABLE Itineraire MODIFY COLUMN id BIGINT NOT NULL AUTO_INCREMENT;
ALTER TABLE Itineraire MODIFY COLUMN idUtilisateur BIGINT NOT NULL;
ALTER TABLE Itineraire MODIFY COLUMN idArretDepart BIGINT NOT NULL;
ALTER TABLE Itineraire MODIFY COLUMN idArretDestination BIGINT NOT NULL;
ALTER TABLE Itineraire_Arret MODIFY COLUMN idItineraire BIGINT NOT NULL;
ALTER TABLE Itineraire_Arret MODIFY COLUMN idArret BIGINT NOT NULL;