package com.cg.entity;

import java.time.LocalTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;



@Entity
@Table(name="bus")
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "busid")
public class Bus {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int busid;
    @NotNull(message = "BusName is mandatory")
	String busname;
    @NotEmpty(message="Driver name cannot be empty")
	String driverName;
    @NotEmpty(message= "Bus type should be mandatory")
	String busType;
    
	LocalTime arrivalTime;
	LocalTime departureTime;
	int seats;
	@Max(value=200, message="Maximum seats is 200")
	int avaiableSeats;
	int price;
	@ManyToOne
	@JoinColumn(name="fk_route")
	Route route;
	
//	@OneToMany(mappedBy="bus", fetch = FetchType.EAGER)
//	List<Reservation> reservations;
	
	@OneToOne
	@JoinColumn(name="fk_feedback")
	Feedback feedback;
	
	
	public int getBusid() {
		return busid;
	}
	public void setBusid(int busid) {
		this.busid = busid;
	}
	public String getBusname() {
		return busname;
	}
	public void setBusname(String busname) {
		this.busname = busname;
	}
	public String getDriverName() {
		return driverName;
	}
	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}
	public String getBusType() {
		return busType;
	}
	public void setBusType(String busType) {
		this.busType = busType;
	}
	
	public LocalTime getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public LocalTime getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(LocalTime departureTime) {
		this.departureTime = departureTime;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	public int getAvaiableSeats() {
		return avaiableSeats;
	}
	public void setAvaiableSeats(int avaiableSeats) {
		this.avaiableSeats = avaiableSeats;
	}
	
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Route getRoute() {
		return route;
	}
	public void setRoute(Route route) {
		this.route = route;
	}

//	public List<Reservation> getReservations() {
//		return reservations;
//	}
//	public void setReservations(List<Reservation> reservations) {
//		this.reservations = reservations;
//	}
	public Feedback getFeedback() {
		return feedback;
	}
	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}
	@Override
	public String toString() {
		return "Bus [busid=" + busid + ", busname=" + busname + ", driverName=" + driverName + ", busType=" + busType
				+ ", arrivalTime=" + arrivalTime + ", departureTime=" + departureTime + ", seats=" + seats
				+ ", avaiableSeats=" + avaiableSeats + ", price=" + price + ", route=" + route + 
				", feedback=" + feedback + "]";
	}
	
	
}
