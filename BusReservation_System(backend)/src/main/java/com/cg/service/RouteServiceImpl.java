package com.cg.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entity.Route;
import com.cg.exception.RouteDoesNotExistException;
import com.cg.repository.RouteRepository;

@Service
public class RouteServiceImpl implements RouteService {

	@Autowired
	RouteRepository routedao;

	@Transactional
	@Override
	public List<Route> showRoute() {
		return routedao.findAll();
	}

	@Transactional
	@Override
	public int addRoute(Route r) throws RouteDoesNotExistException {

		Optional<Route> routeId = routedao.findById(r.getRouteId());
		if (r.getRouteFrom().equals("null") || (r.getRouteTo().equals("null"))) {
			throw new RouteDoesNotExistException("Route does not exist");
		}
		routedao.saveAndFlush(r);
		return r.getRouteId();
	}

	@Transactional
	@Override
	public Route updateRoute(Route r) {

		Optional<Route> previousroute = routedao.findById(r.getRouteId());
		Route rupdated = previousroute.get();
		rupdated.setRouteFrom(r.getRouteFrom());
		rupdated.setRouteTo(r.getRouteTo());
		rupdated.setDistance(r.getDistance());
		rupdated.setBusList(r.getBusList());
		return rupdated;
	}

	@Transactional
	@Override
	public void deleteRouteByID(int routeId) {	
      
          		routedao.deleteById(routeId);
	}
	
	
	@Override
	public Route getRouteId(String routeFrom, String routeTo) {
		Route route =routedao.searchByRoute(routeFrom,routeTo);
		return  route;
	}     
      
}

