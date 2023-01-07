package com.cg.service;

import java.util.List;

import com.cg.entity.Route;
import com.cg.exception.RouteDoesNotExistException;

public interface RouteService {
	List<Route> showRoute();
	
	int addRoute(Route r) throws RouteDoesNotExistException;
	Route updateRoute(Route r);
	void deleteRouteByID(int routeId);
	Route getRouteId(String routeFrom,String routeTo);

}
