package com.cg;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalTime;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.Rollback;

import com.cg.controller.BusController;
import com.cg.entity.Bus;
import com.cg.repository.BusRepository;
import com.cg.service.BusService;


@SpringBootTest
public class BusServiceImplTests {

	@Autowired
	private BusService busservice;

	@MockBean
	private BusRepository busrepo;

	@InjectMocks
	BusController bc;

	@Mock
	Bus bus;

	@Test
	public void addBusSucessfully(){
		Bus bs = new Bus();
		bs.setBusid(157);
		bs.setBusname("MILT");
		bs.setBusType("GOVT-WB");
		bs.setDriverName("Shasi");
		bs.setDepartureTime(LocalTime.now());
		bs.setArrivalTime(LocalTime.now());
		bs.setSeats(50);
		bs.setAvaiableSeats(10);

		int b = busservice.addBus(bs);
		assertNotNull(b);
	}

	@Test
	@Rollback(false)
	public void testDeleteBus() {
		@SuppressWarnings("unused")
		Optional<Bus> bu = busrepo.findById(12);
		busrepo.deleteById(bus.getBusid());
		Optional<Bus> deletedBus = busrepo.findById(12);
		assertThat(deletedBus);

	}

}
