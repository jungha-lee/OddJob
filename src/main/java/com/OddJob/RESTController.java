package com.OddJob;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RESTController {

    @Autowired
    JobRepository jobRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    ApplicationRepository applicationRepository;


    @GetMapping("/jobs")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Job> getAllJobs () {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        return jobs;
    }

    @GetMapping("/users")
    public List<User> getAllUsers () {
        List<User> users = (List<User>) userRepository.findAll();
        return users;
    }

    @GetMapping("/locations")
    public List<Location> getAllLocations () {
        List<Location> locations = (List<Location>) locationRepository.findAll();
        return locations;
    }

    @GetMapping("/applications")
    public List<Application> getAllApplications () {
        List<Application> applications = (List<Application>) applicationRepository.findAll();
        return applications;
    }

    @PostMapping("/jobs")
    public Job postJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }


}
