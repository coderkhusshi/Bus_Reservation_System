package com.cg.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entity.Reservation;
import com.cg.exception.InvalidDataInput;
import com.cg.repository.ReservationRepository;

@Service
public class ReservationServiceImpl implements ReservationService {
	@Autowired
	ReservationRepository reservationdao;

	@Override
	public List<Reservation> showReservation() {
		return reservationdao.findAll();
	}

	@Transactional
	@Override
	public int addReservation(Reservation reservation) throws InvalidDataInput {
		Optional<Reservation> reservationId = reservationdao.findById(reservation.getReservationId());
		if (reservation.getSource().equals(reservation.getDestination())) {
			throw new InvalidDataInput("Source and Destination can't be same");
		}
		reservationdao.saveAndFlush(reservation);
		return reservation.getReservationId();
	}

	@Transactional
	@Override
	public Reservation updateReservation(Reservation reservation) {
		Optional<Reservation> previousReservation = reservationdao.findById(reservation.getReservationId());
		Reservation reservationupdated = previousReservation.get();
		reservationupdated.setDestination(reservation.getDestination());
        reservationupdated.setReservationDate(reservation.getReservationDate());
        reservationupdated.setReservationTime(reservation.getReservationTime());
        reservationupdated.setReservationType(reservation.getReservationType());
        reservationupdated.setSource(reservation.getSource());
		return reservationupdated;
	}

	@Override
	public void deleteReservationById(int id) {
		Optional<Reservation> reservation=reservationdao.findById(id);
        if(reservation.isPresent())
        {
            Reservation reserv=reservation.get();
            reserv.setBus(null);
		    reservationdao.deleteById(id);
		    }
	}

	@Override
	public Reservation showReservation(Reservation r) {
		return null;
	}
}
