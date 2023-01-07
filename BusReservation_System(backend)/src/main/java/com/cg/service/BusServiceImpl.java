package com.cg.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.entity.Bus;
import com.cg.exception.BusIdNotFoundException;
import com.cg.repository.BusRepository;

@Service
public class BusServiceImpl implements BusService{

	@Autowired
    BusRepository busrepo;
	
    @Transactional
	@Override
	public List<Bus> showBus() {
		return busrepo.findAll();
	}
    
    @Transactional
	@Override
	public int addBus(Bus bus){
    	Optional<Bus> busId =busrepo.findById(bus.getBusid());
    	busrepo.saveAndFlush(bus);
        return bus.getBusid();
    
	}
    
    @Transactional
	@Override
	public Bus updateBus(Bus bus) throws BusIdNotFoundException{
    	Optional<Bus> previousbus=busrepo.findById(bus.getBusid());
    	
    	if(previousbus.get() == null) {
    		throw new BusIdNotFoundException("BusId Not Found");
    	}
    	
    	Bus busupdated=previousbus.get();
    	busupdated.setBusname(bus.getBusname());
    	busupdated.setDriverName(bus.getDriverName());
    	busupdated.setBusType(bus.getBusType());
    	busupdated.setArrivalTime(bus.getArrivalTime());
    	busupdated.setDepartureTime(bus.getDepartureTime());
    	busupdated.setSeats(bus.getSeats());
    	busupdated.setAvaiableSeats(bus.getAvaiableSeats());
    	busupdated.setRoute(bus.getRoute());
    			
		return busupdated;
	}
    @Transactional
	@Override
	public void deleteBusById(int busid) throws BusIdNotFoundException{
    	int reservationid;
    	if(busid==0) {
    		throw new BusIdNotFoundException("BusId Not Found");
    	}
    	Optional<Bus> buss= busrepo.findById(busid);
        if(buss.isPresent())
        {
            Bus bu=buss.get();
            bu.setFeedback(null);
            bu.setRoute(null);
            
    	    busrepo.deleteById(busid);
    	}
	}
    
    @Override
    @Transactional
    public Bus findBus(int busid) {
        // TODO Auto-generated method stub
        Optional<Bus> bu = busrepo.findById(busid);
        return bu.get();
    }

	@Override
	public Bus getBusid(Integer busid, Integer avaiableSeats) {
	System.out.println(avaiableSeats);
    Optional<Bus> previousbus=busrepo.findById(busid);
	Bus busupdated=previousbus.get();
	System.out.println(busupdated.toString());
	busupdated.setAvaiableSeats(avaiableSeats);		
	return busupdated;
	}
}
	

