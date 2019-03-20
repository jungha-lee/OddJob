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

    @GetMapping("/locations")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Location> getAllLocations () {
        List<Location> locations = (List<Location>) locationRepository.findAll();
        return locations;
    }

    @GetMapping("/applications")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Application> getAllApplications () {
        List<Application> applications = (List<Application>) applicationRepository.findAll();
        return applications;
    }

    @PostMapping("/jobs")
    @CrossOrigin(origins = "http://localhost:4200")
    public Job postJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> getAllUsers(){
        return (List<User>)userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User getAllUsers(@PathVariable Long id){
        return userRepository.findById(id).get();
    }

    @PostMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public User postUser(@RequestBody User user) {
        return userRepository.save(user);
    }

}
