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

import com.cg.entity.Route;
import com.cg.exception.RouteDoesNotExistException;
import com.cg.service.RouteService;

@RestController
@CrossOrigin
@RequestMapping(value = "/route")
public class RouteController {

	@Autowired
	RouteService routeService;

	@GetMapping( produces = "application/json")
	List<Route> showRoute() {
		List<Route> routeList = routeService.showRoute();
		Iterator<Route> route = routeList.iterator();

		while (route.hasNext()) {
			System.out.println(route.next());
		}
		return routeList;
	}

	@PostMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Route> addRoute(@Valid @RequestBody Route route) throws RouteDoesNotExistException {
		@SuppressWarnings("unused")
		int routeId = routeService.addRoute(route);
		if (route.getRouteFrom().equals("null") || (route.getRouteTo().equals("null"))) {
			throw new RouteDoesNotExistException("Route does not exist");
		}
		return ResponseEntity.ok(route);
	}

	
	@PutMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Route> updateRoute(@Valid @RequestBody Route route) {
		Route r = routeService.updateRoute(route);
		return new ResponseEntity<Route>(r, HttpStatus.ACCEPTED);
	}

	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@DeleteMapping("/{routeId}")
    ResponseEntity deleteRoute(@PathVariable("routeId") int routeId) {
        routeService.deleteRouteByID(routeId);
        return new ResponseEntity("Route with Id" + routeId + "is deleted", HttpStatus.OK);
    }

	@GetMapping("/{routeFrom}/{routeTo}")
	public ResponseEntity<Route>getAllBusses (@PathVariable("routeFrom")String routeFrom,@PathVariable("routeTo")String routeTo){
	Route route= routeService.getRouteId(routeFrom, routeTo);
	int routeId= route.getRouteId();
	if(route==null)
	{
		return new ResponseEntity("Sorry buses not available",HttpStatus.NOT_FOUND);
	}
	return new ResponseEntity<Route>(route,HttpStatus.OK);
	}
}
