package com.schaaktoernooi.schaaktoernooi.controller;

import com.schaaktoernooi.schaaktoernooi.modul.Schaker;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface SchakerRepository extends CrudRepository<Schaker, Long> {
}
