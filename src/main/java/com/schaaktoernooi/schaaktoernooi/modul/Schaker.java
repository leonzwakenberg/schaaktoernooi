package com.schaaktoernooi.schaaktoernooi.modul;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Schaker {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    long id;

    String voornaam;
    String tussenvoegsel;
    String achternaam;
    String geboortedatum;
    int gewonnenPartijen;
    int remises;
    int verlorenPartijen;

}
