package com.cg;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.Rollback;

import com.cg.controller.RouteController;
import com.cg.entity.Route;
import com.cg.exception.RouteDoesNotExistException;
import com.cg.repository.RouteRepository;
import com.cg.service.RouteService;

@SpringBootTest
public class RouteServiceImplTests {

	@Autowired
	private RouteService routeservice;

	@MockBean
	private RouteRepository routerepo;

	@InjectMocks
	RouteController rc;

	@Mock
	Route route;

	@Test
	public void addRouteSucessfully() throws RouteDoesNotExistException {
		Route rt = new Route();
		rt.setRouteId(114);
		rt.setDistance(450);
		rt.setRouteFrom("Barhampur");
		rt.setRouteTo("Mayapur");
		rt.setBusList(null);

		int r = routeservice.addRoute(rt);
		assertNotNull(r);
	}

	@Test
	@Rollback(false)
	public void testDeleteRoute() {
		Optional<Route> ro = routerepo.findById(114);
		routerepo.deleteById(route.getRouteId());
		Optional<Route> deletedRoute = routerepo.findById(114);
		assertThat(deletedRoute);

	}

}
