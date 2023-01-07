package com.cg.service;

import java.util.List;

import com.cg.entity.Bus;
import com.cg.exception.BusIdNotFoundException;

public interface BusService {

	public List<Bus> showBus();
    int addBus(Bus bus);
    Bus updateBus(Bus bus) throws BusIdNotFoundException;
    void deleteBusById(int id) throws BusIdNotFoundException;
    public Bus findBus(int busid);
	public Bus getBusid(Integer busid, Integer avaiableSeats);

}
