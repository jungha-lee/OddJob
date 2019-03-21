package com.OddJob;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobRepository extends CrudRepository<Job, Long> {


    List<Job> findByOwner_Id(long l);

}
