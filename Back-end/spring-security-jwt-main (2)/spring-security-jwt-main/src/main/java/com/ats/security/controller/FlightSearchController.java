package com.ats.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ats.security.entity.FlightSearch;
import com.ats.security.service.FlightSearchService;

@RestController
@CrossOrigin
@RequestMapping("/flights")
public class FlightSearchController {

    private final FlightSearchService flightSearchService;

    @Autowired
    public FlightSearchController(FlightSearchService flightSearchService) {
        this.flightSearchService = flightSearchService;
    }

    @GetMapping("/{fromLocation}/{toLocation}")
    public List<FlightSearch> findFlightsByFromAndToLocations(@PathVariable String fromLocation, @PathVariable String toLocation) {
        return flightSearchService.findFlightsByFromAndToLocations(fromLocation, toLocation);
    }
    @PostMapping("/save")
    public boolean saveFlights(@RequestBody FlightSearch flight) {
    	return flightSearchService.saveFlights(flight);
    }
}
