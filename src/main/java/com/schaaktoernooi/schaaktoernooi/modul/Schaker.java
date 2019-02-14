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

    public String voornaam;
    public String tussenvoegsel;
    public String achternaam;
    public String geboortedatum;
    public int gewonnenPartijen;
    public int remises;
    public int verlorenPartijen;

}
