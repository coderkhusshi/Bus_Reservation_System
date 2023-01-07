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

import com.cg.entity.Bus;
import com.cg.exception.BusIdNotFoundException;
import com.cg.service.BusService;

@RestController
@CrossOrigin
@RequestMapping(path = "/bus")
public class BusController {

	@Autowired
	private BusService busService;

	
	//http://localhost:8081/BusApp/bus
	@GetMapping(produces = "application/json")
	public List<Bus> showBus() {
		List<Bus> busList = busService.showBus();
		@SuppressWarnings("unused")
		Iterator<Bus> bus = busList.iterator();
		return busList;
	}

	
	//http://localhost:8081/BusApp/bus
	@PostMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Bus> addBus(@Valid@RequestBody Bus bus) {
		@SuppressWarnings("unused")
		int busId = busService.addBus(bus);
		return ResponseEntity.ok(bus);
	}

	
	//http://localhost:8081/BusApp/bus
	@PutMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Bus> updateBus(@Valid@RequestBody Bus bus) throws BusIdNotFoundException {
		Bus b = busService.updateBus(bus);
		if (b == null) {
			throw new BusIdNotFoundException("Bus Id Not Fount");
		}
		return new ResponseEntity<Bus>(b, HttpStatus.ACCEPTED);
	}

	@SuppressWarnings({"rawtypes", "unchecked"})
	@DeleteMapping("/{busid}")
	ResponseEntity deleBus(@PathVariable("busid") int busid) throws BusIdNotFoundException {
		busService.deleteBusById(busid);
		if (busid == 0) {
			throw new BusIdNotFoundException("BusId Not Found");
		}
		return new ResponseEntity("Customer with ID" + busid + "is deleted", HttpStatus.OK);

	}
	@GetMapping("/{busid}")
    public ResponseEntity<Bus> findBus(@PathVariable("busid")Integer busid){
        Bus buss= busService.findBus(busid);
        if(buss==null) {
            return new ResponseEntity("Sorry! bus not found!",
                    HttpStatus.NOT_FOUND);
        }
        
        return new ResponseEntity<Bus>(buss, HttpStatus.OK);
    }
	
	@PutMapping("/{busid}/{avaiableSeats}")
    public ResponseEntity<Bus> updateBus(@PathVariable("busid")Integer busid,@PathVariable("avaiableSeats")Integer avaiableSeats){
      System.out.println(avaiableSeats);
		Bus bus= busService.getBusid(busid, avaiableSeats);
//    int busid= bus.getBusid();
//    if(bus==null)
//    {
//       return new ResponseEntity("Sorry bus not available",HttpStatus.NOT_FOUND);
//    }
    return new ResponseEntity<Bus>(bus,HttpStatus.OK);
    }
}
