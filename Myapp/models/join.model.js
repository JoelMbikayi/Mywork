

"SELECT * FROM presence INNER JOIN etudiant ON presence.Etudiant_matricule=etudiant.matricule INNER JOIN seance ON presence.Seance_idSeance=seance.idSeance"