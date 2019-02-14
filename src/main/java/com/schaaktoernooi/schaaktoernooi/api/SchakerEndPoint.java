package com.schaaktoernooi.schaaktoernooi.api;


import com.schaaktoernooi.schaaktoernooi.controller.SchakerRepository;
import com.schaaktoernooi.schaaktoernooi.modul.Schaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SchakerEndPoint {

    @Autowired
    private SchakerRepository schakersRepository;

    @GetMapping("/schaker/{nieuweschaker}")
        public Schaker nieuwSchaker(@PathVariable String nieuwSchaker) {
        System.out.println(nieuwSchaker);
        Schaker legend = new Schaker();
        legend.voornaam = nieuwSchaker;
        Schaker schaakLegend = schakersRepository.save(legend);
        return schaakLegend;
    }


    @GetMapping("/schaker")
    public Iterable<Schaker> geefAlleSchakers(){
        Iterable<Schaker> schakersOverzicht = schakersRepository.findAll();
        return schakersOverzicht;
    }

    @PostMapping("/schaker/add")
    public void sendSchaker(@RequestBody Schaker schaker){
        schakersRepository.save(schaker);
    }





}
