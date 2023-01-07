package com.cg.controller;

import java.util.Iterator;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entity.Reservation;
import com.cg.exception.InvalidDataInput;
import com.cg.service.ReservationService;

@RestController
@CrossOrigin
@RequestMapping(path = "/controllerr")

public class ReservationController {
	
	
	@Autowired
	ReservationService reservationService;

	@GetMapping(produces = "application/json")
	List<Reservation> showReservation() {
		List<Reservation> reservationList = reservationService.showReservation();
		@SuppressWarnings("unused")
		Iterator<Reservation> reservation = reservationList.iterator();
		return reservationList;
	}

	@PostMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Reservation> addReservation(@Valid @RequestBody Reservation reservation) throws InvalidDataInput {
		@SuppressWarnings("unused")
		int reservationId = reservationService.addReservation(reservation);
		return ResponseEntity.ok(reservation);
	}

	@PutMapping(consumes = "application/json", produces = "application/json")
	public ResponseEntity<Reservation> updateReservation(@Valid @RequestBody Reservation reservation) {
		Reservation r = reservationService.updateReservation(reservation);
		return new ResponseEntity<Reservation>(r, HttpStatus.ACCEPTED);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@DeleteMapping("/{reservationId}")
	ResponseEntity deleReservation(@PathVariable("reservationId") int reservationId) {
		reservationService.deleteReservationById(reservationId);
		return new ResponseEntity("reservation with Id" + reservationId + "is deleted", HttpStatus.OK);
	}

}
