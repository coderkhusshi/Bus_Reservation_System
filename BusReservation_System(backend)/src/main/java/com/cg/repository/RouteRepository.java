package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.entity.Route;

@Repository
public interface RouteRepository extends  JpaRepository<Route, Integer>{
	@Query("SELECT rout FROM Route rout WHERE rout.routeFrom LIKE %:routeFrom% AND rout.routeTo LIKE %:routeTo%")//JPQL
	public Route searchByRoute(@Param("routeFrom")String routeFrom,@Param("routeTo")String routeTo);
}
	

