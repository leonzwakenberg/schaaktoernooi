package com.schaaktoernooi.schaaktoernooi.api;


import com.schaaktoernooi.schaaktoernooi.controller.SchakerRepository;
import com.schaaktoernooi.schaaktoernooi.modul.Schaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SchakerEndPoint {

    @Autowired
    private SchakerRepository schakersRepository;

    //@GetMapping



    @GetMapping("/schaker")
    public Iterable<Schaker> geefAlleSchakers(){
        Iterable<Schaker> schakersOverzicht = schakersRepository.findAll();
        return schakersOverzicht;
    }
}

/**
    public Iterable<Room> getAllRooms() {
        Iterable<Room> rooms = roomService.showAllRooms();
        return rooms;

    public Iterable<Room> showAllRooms() {
        return roomRepository.findAll();
    }
 */