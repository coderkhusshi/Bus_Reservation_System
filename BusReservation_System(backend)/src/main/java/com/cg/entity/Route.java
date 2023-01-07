package com.cg.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="route")
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "routeId")

public class Route {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    int routeId;
	@NotNull(message="route should be specified")
    String routeFrom;
	@NotNull(message="route should be specified")
    String routeTo;
	@Min(value=1,message="How much distance you want to travel!!")
    int distance;
    
   @OneToMany(mappedBy="route")
   //@OneToMany
    List<Bus> busList= new ArrayList<Bus>();
	
    public int getRouteId() {
		return routeId;
	}
	public void setRouteId(int routeId) {
		this.routeId = routeId;
	}
	public String getRouteFrom() {
		return routeFrom;
	}
	public void setRouteFrom(String routeFrom) {
		this.routeFrom = routeFrom;
	}
	public String getRouteTo() {
		return routeTo;
	}
	public void setRouteTo(String routeTo) {
		this.routeTo = routeTo;
	}
	public int getDistance() {
		return distance;
	}
	public void setDistance(int distance) {
		this.distance = distance;
	}
	public List<Bus> getBusList() {
		return busList;
	}
	public void setBusList(List<Bus> busList) {
		this.busList = busList;
	}
	@Override
	public String toString() {
		return "Route [routeId=" + routeId + ", routeFrom=" + routeFrom + ", routeTo=" + routeTo + ", distance="
				+ distance + ", busList=" + busList + "]";
	}
	
	
    
    

}
