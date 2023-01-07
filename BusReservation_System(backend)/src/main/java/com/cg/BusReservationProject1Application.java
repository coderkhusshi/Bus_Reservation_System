package com.cg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class BusReservationProject1Application {

	public static void main(String[] args) {
		SpringApplication.run(BusReservationProject1Application.class, args);
		
	}

}
