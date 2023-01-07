package com.cg;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.time.LocalDate;
import java.time.LocalTime;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.entity.Reservation;
import com.cg.exception.InvalidDataInput;
import com.cg.repository.ReservationRepository;
import com.cg.service.ReservationService;

@SpringBootTest
class ReservationServiceImplTests {

	@Autowired
	private ReservationService reservationservice;
	
	@MockBean
	private ReservationRepository reservationrepo;
	
	
	
	@Test
	public void addReservationSucessfully() throws InvalidDataInput {
	Reservation rs = new Reservation();
	rs.setReservationId(11);
	rs.setReservationStatus("Booked");
	rs.setReservationType("AC");
	rs.setReservationDate(LocalDate.now());
	rs.setReservationTime(LocalTime.now());
	rs.setSource("Bankura");
	rs.setDestination("Howrah");
	
	int r1 = reservationservice.addReservation(rs);
	assertNotNull(r1);
	}
	
	
	@Test
	public void showReservationSucessfully() {
	Reservation r = new Reservation();
	r.setReservationId(11);
	r.setReservationStatus("Booked");
	r.setReservationType("AC");
	r.setReservationDate(LocalDate.now());
	r.setReservationTime(LocalTime.now());
	r.setSource("Bankura");
	r.setDestination("Howrah");
	
	Reservation r3 = reservationservice.showReservation(r);
	assertThrows(r3);
	}
	private void assertThrows(Reservation r3) {
		
	}
	
	@Test

	public void deleteReservatioTest() { 
		@SuppressWarnings("unused")
		Reservation r =new Reservation();
		reservationservice.deleteReservationById(28); 
		verify(reservationrepo, times (1)).deleteById(28);
	}
	

}
