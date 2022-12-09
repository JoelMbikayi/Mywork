-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 09 déc. 2022 à 15:20
-- Version du serveur :  8.0.18
-- Version de PHP :  7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mydbtfc`
--

-- --------------------------------------------------------

--
-- Structure de la table `alertes`
--

DROP TABLE IF EXISTS `alertes`;
CREATE TABLE IF NOT EXISTS `alertes` (
  `idAlertes` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(450) DEFAULT NULL,
  `Bracelet_adress_mac` varchar(45) NOT NULL,
  PRIMARY KEY (`idAlertes`,`Bracelet_adress_mac`),
  KEY `fk_Alertes_Bracelet1_idx` (`Bracelet_adress_mac`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auditoire`
--

DROP TABLE IF EXISTS `auditoire`;
CREATE TABLE IF NOT EXISTS `auditoire` (
  `idAuditoire` int(11) NOT NULL AUTO_INCREMENT,
  `longitude1` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `latitude1` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `longitude2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `latitude2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `longitude3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `latitude3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `longitude4` varchar(45) DEFAULT NULL,
  `latitude4` varchar(45) DEFAULT NULL,
  `altmin` varchar(45) DEFAULT NULL,
  `altmax` varchar(45) DEFAULT NULL,
  `nom` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAuditoire`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `auditoire`
--

INSERT INTO `auditoire` (`idAuditoire`, `longitude1`, `latitude1`, `longitude2`, `latitude2`, `longitude3`, `latitude3`, `longitude4`, `latitude4`, `altmin`, `altmax`, `nom`) VALUES
(1, ' 27.481399315338418', '-11.675839779038432,', '27.481351035578967', '-11.675705816830625', '27.481160598748755', '-11.675965861056605', '27.481077450272377', '-11.675843719100092', NULL, NULL, 'GRANDE SALLE');

-- --------------------------------------------------------

--
-- Structure de la table `bracelet`
--

DROP TABLE IF EXISTS `bracelet`;
CREATE TABLE IF NOT EXISTS `bracelet` (
  `adress_mac` varchar(45) NOT NULL,
  `wifi` varchar(45) DEFAULT NULL,
  `Bluetooth` varchar(45) DEFAULT NULL,
  `Etudiant_matricule` varchar(8) NOT NULL,
  PRIMARY KEY (`adress_mac`),
  KEY `fk_Bracelet_Etudiant1_idx` (`Etudiant_matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `bracelet`
--

INSERT INTO `bracelet` (`adress_mac`, `wifi`, `Bluetooth`, `Etudiant_matricule`) VALUES
('F4', NULL, NULL, '12LM406'),
('F8', NULL, NULL, '12LM405');

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

DROP TABLE IF EXISTS `compte`;
CREATE TABLE IF NOT EXISTS `compte` (
  `login` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `Coordonnateur_idCoordonnateur` int(11) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`login`),
  KEY `fk_Compte_Coordonnateur_idx` (`Coordonnateur_idCoordonnateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `compte`
--

INSERT INTO `compte` (`login`, `password`, `Coordonnateur_idCoordonnateur`, `role`) VALUES
('Carsi', '12345', 2, 'Secretaire'),
('frere', '1234', 5, 'Secretaire'),
('kaj', '1', 1, 'Coordonnateur');

-- --------------------------------------------------------

--
-- Structure de la table `coordonnateur`
--

DROP TABLE IF EXISTS `coordonnateur`;
CREATE TABLE IF NOT EXISTS `coordonnateur` (
  `idCoordonnateur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCoordonnateur`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `coordonnateur`
--

INSERT INTO `coordonnateur` (`idCoordonnateur`, `nom`, `prenom`, `mail`) VALUES
(1, 'Emmanuella', 'kaja', 'kaj@gmail.com'),
(2, 'Mubalo', 'Carsi', 'carsi@gmail.com'),
(5, 'NGOIE', 'frere', 'frere@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `coordonnees`
--

DROP TABLE IF EXISTS `coordonnees`;
CREATE TABLE IF NOT EXISTS `coordonnees` (
  `idCoordonnees` int(11) NOT NULL AUTO_INCREMENT,
  `longitude` varchar(45) DEFAULT NULL,
  `latitude` varchar(45) DEFAULT NULL,
  `altitude` varchar(45) DEFAULT NULL,
  `Bracelet_adress_mac` varchar(45) NOT NULL,
  PRIMARY KEY (`idCoordonnees`),
  KEY `fk_Coordonnees_Bracelet1_idx` (`Bracelet_adress_mac`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

DROP TABLE IF EXISTS `cours`;
CREATE TABLE IF NOT EXISTS `cours` (
  `idCours` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `ponderation` int(11) DEFAULT NULL,
  `Promotion_idPromotion` int(11) NOT NULL,
  PRIMARY KEY (`idCours`),
  KEY `fk_Cours_Promotion1_idx` (`Promotion_idPromotion`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`idCours`, `nom`, `ponderation`, `Promotion_idPromotion`) VALUES
(1, 'Java SE', 4, 1),
(2, 'Java SE', 4, 2),
(3, 'Physique', 3, 1),
(4, 'GPI', 3, 2),
(5, 'Educit', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
CREATE TABLE IF NOT EXISTS `etudiant` (
  `matricule` varchar(8) NOT NULL,
  `nom_complet` varchar(45) DEFAULT NULL,
  `genre` varchar(45) DEFAULT NULL,
  `Promotion_idPromotion` int(11) NOT NULL,
  PRIMARY KEY (`matricule`),
  KEY `fk_Etudiant_Promotion1_idx` (`Promotion_idPromotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`matricule`, `nom_complet`, `genre`, `Promotion_idPromotion`) VALUES
('12LM405', 'LINA MAN eruc', 'F', 1),
('12LM406', 'Muna LINA MAN eruc', 'F', 1),
('12NM400', 'NSHIMBA MPIANA Heritier', 'M', 2),
('12NM401', 'NSHIBA MPIANA Henry', 'M', 2),
('12NM402', 'NPUNDE MPIANA eric', 'M', 2),
('12NM408', 'KATUTA KAPIA eric', 'F', 2),
('12NM560', 'NKULU MUAKA Saisai', 'M', 2),
('18jh597', 'Charly Fug', 'F', 2),
('18ks990', 'KALUFYA SYS Chris', 'F', 1),
('18MM394', 'KYOMA KYOMA', 'M', 1),
('18nm404', 'NTUMBA MBIKAYI Joel', 'M', 2),
('20PM455', 'PACKO MIS sam', 'F', 1),
('M', '17ks200', 'kapolow', 1);

-- --------------------------------------------------------

--
-- Structure de la table `presence`
--

DROP TABLE IF EXISTS `presence`;
CREATE TABLE IF NOT EXISTS `presence` (
  `idPresence` int(11) NOT NULL AUTO_INCREMENT,
  `presence` tinyint(1) DEFAULT NULL,
  `Etudiant_matricule` varchar(8) NOT NULL,
  `Seance_idSeance` int(11) NOT NULL,
  PRIMARY KEY (`idPresence`),
  KEY `fk_Presence_Etudiant1_idx` (`Etudiant_matricule`),
  KEY `fk_Presence_Seance1_idx` (`Seance_idSeance`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `presence`
--

INSERT INTO `presence` (`idPresence`, `presence`, `Etudiant_matricule`, `Seance_idSeance`) VALUES
(1, 1, '12LM405', 1),
(6, 0, '12LM406', 1),
(7, 1, '12NM400', 2),
(8, 0, '12NM401', 2);

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `idPromotion` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `filiere` varchar(45) DEFAULT NULL,
  `Coordonnateur_idCoordonnateur` int(11) NOT NULL,
  PRIMARY KEY (`idPromotion`),
  KEY `fk_Promotion_Coordonnateur1_idx` (`Coordonnateur_idCoordonnateur`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`idPromotion`, `nom`, `filiere`, `Coordonnateur_idCoordonnateur`) VALUES
(1, 'G2', 'Genie Logiciel', 2),
(2, 'G3', 'Genie Logiciel', 1);

-- --------------------------------------------------------

--
-- Structure de la table `seance`
--

DROP TABLE IF EXISTS `seance`;
CREATE TABLE IF NOT EXISTS `seance` (
  `date` date NOT NULL,
  `heure_debut` time DEFAULT NULL,
  `Cours_idCours` int(11) NOT NULL,
  `Auditoire_idAuditoire` int(11) NOT NULL,
  `idSeance` int(11) NOT NULL AUTO_INCREMENT,
  `heure_fin` time DEFAULT NULL,
  PRIMARY KEY (`idSeance`),
  KEY `fk_Seance_Cours1_idx` (`Cours_idCours`),
  KEY `fk_Seance_Auditoire1_idx` (`Auditoire_idAuditoire`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `seance`
--

INSERT INTO `seance` (`date`, `heure_debut`, `Cours_idCours`, `Auditoire_idAuditoire`, `idSeance`, `heure_fin`) VALUES
('2022-12-06', '09:00:00', 3, 1, 1, '11:00:00'),
('2022-12-07', '12:05:00', 2, 1, 2, '15:00:00'),
('2022-12-08', '08:00:00', 3, 1, 3, '09:00:00'),
('2022-12-19', '10:15:00', 3, 1, 4, '12:20:00');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `alertes`
--
ALTER TABLE `alertes`
  ADD CONSTRAINT `fk_Alertes_Bracelet1` FOREIGN KEY (`Bracelet_adress_mac`) REFERENCES `bracelet` (`adress_mac`);

--
-- Contraintes pour la table `bracelet`
--
ALTER TABLE `bracelet`
  ADD CONSTRAINT `fk_Bracelet_Etudiant1` FOREIGN KEY (`Etudiant_matricule`) REFERENCES `etudiant` (`matricule`);

--
-- Contraintes pour la table `compte`
--
ALTER TABLE `compte`
  ADD CONSTRAINT `fk_Compte_Coordonnateur` FOREIGN KEY (`Coordonnateur_idCoordonnateur`) REFERENCES `coordonnateur` (`idCoordonnateur`);

--
-- Contraintes pour la table `coordonnees`
--
ALTER TABLE `coordonnees`
  ADD CONSTRAINT `fk_Coordonnees_Bracelet1` FOREIGN KEY (`Bracelet_adress_mac`) REFERENCES `bracelet` (`adress_mac`);

--
-- Contraintes pour la table `cours`
--
ALTER TABLE `cours`
  ADD CONSTRAINT `fk_Cours_Promotion1` FOREIGN KEY (`Promotion_idPromotion`) REFERENCES `promotion` (`idPromotion`);

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `fk_Etudiant_Promotion1` FOREIGN KEY (`Promotion_idPromotion`) REFERENCES `promotion` (`idPromotion`);

--
-- Contraintes pour la table `presence`
--
ALTER TABLE `presence`
  ADD CONSTRAINT `fk_Presence_Etudiant1` FOREIGN KEY (`Etudiant_matricule`) REFERENCES `etudiant` (`matricule`),
  ADD CONSTRAINT `fk_Presence_Seance1` FOREIGN KEY (`Seance_idSeance`) REFERENCES `seance` (`idSeance`);

--
-- Contraintes pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD CONSTRAINT `fk_Promotion_Coordonnateur1` FOREIGN KEY (`Coordonnateur_idCoordonnateur`) REFERENCES `coordonnateur` (`idCoordonnateur`);

--
-- Contraintes pour la table `seance`
--
ALTER TABLE `seance`
  ADD CONSTRAINT `fk_Seance_Auditoire1` FOREIGN KEY (`Auditoire_idAuditoire`) REFERENCES `auditoire` (`idAuditoire`),
  ADD CONSTRAINT `fk_Seance_Cours1` FOREIGN KEY (`Cours_idCours`) REFERENCES `cours` (`idCours`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
