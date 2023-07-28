package com.ats.security.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ats.security.entity.FlightSearch;

@Repository
public interface FlightSearchRepository extends JpaRepository<FlightSearch, Long> {

    // Custom query to find flights based on fromLocation and toLocation
    @Query("SELECT fs FROM FlightSearch fs WHERE fs.fromLocation = ?1 AND fs.toLocation = ?2")
    List<FlightSearch> findFlightsByFromAndToLocations(String fromLocation, String toLocation);
}
