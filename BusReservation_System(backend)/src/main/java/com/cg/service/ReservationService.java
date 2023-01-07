package com.cg.service;

import java.util.List;
import com.cg.entity.Reservation;
import com.cg.exception.InvalidDataInput;


public interface ReservationService {
	List<Reservation> showReservation();
    int addReservation(Reservation reservation) throws InvalidDataInput;
    Reservation updateReservation(Reservation reservation);
    void deleteReservationById(int id);
	Reservation showReservation(Reservation r);

}
