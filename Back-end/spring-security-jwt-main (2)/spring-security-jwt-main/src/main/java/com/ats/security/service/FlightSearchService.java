package com.ats.security.service;


import java.security.Key;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ats.security.entity.FlightSearch;
import com.ats.security.repository.FlightSearchRepository;

@Service
public class FlightSearchService {

    private final FlightSearchRepository flightSearchRepository;

    @Autowired
    public FlightSearchService(FlightSearchRepository flightSearchRepository) {
        this.flightSearchRepository = flightSearchRepository;
    }
    public List<FlightSearch> findFlightsByFromAndToLocations(String fromLocation, String toLocation) {
        return flightSearchRepository.findFlightsByFromAndToLocations(fromLocation, toLocation);
    }
	public boolean saveFlights(FlightSearch flight) {
		flightSearchRepository.save(flight);
		return true;
	}


}
