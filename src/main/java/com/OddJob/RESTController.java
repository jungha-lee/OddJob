package com.OddJob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    @Autowired
    private PasswordEncoder encoder;

    @GetMapping("/jobs")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Job> getAllJobs () {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        return jobs;
    }

    @PostMapping("/jobs")
    @CrossOrigin(origins = "http://localhost:4200")
    public Job postJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @GetMapping("/locations")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Location> getAllLocations () {
        List<Location> locations = (List<Location>) locationRepository.findAll();
        return locations;
    }

    @GetMapping("/locations/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Location getAllLocations(@PathVariable Long id){
        return locationRepository.findById(id).get();
    }

    @PostMapping("/locations")
    @CrossOrigin(origins = "http://localhost:4200")
    public Location postLocation(@RequestBody Location location) {
        return locationRepository.save(location);
    }

    @GetMapping("/applications")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Application> getAllApplications () {
        List<Application> applications = (List<Application>) applicationRepository.findAll();
        return applications;
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
        System.out.println("triggered");
        System.out.println(user.getPassword());
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @GetMapping("/users/jobs/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Job> getJobsOwnedByUser(@PathVariable Long id){
        return (List<Job>)jobRepository.findByOwner_Id(id);
    }

    @GetMapping("/users/applications/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Job> getJobAppliedByUser(@PathVariable Long id){

        System.out.println("triggered");
        User user = userRepository.findById(id).get();

        List<Application> applications = applicationRepository.findJob_IdByApplicantId(user);
        List<Job> jobs = new ArrayList<>();
        for(Application app: applications){
            jobs.add(app.getJobId());
        }
        return jobs;
    }

    @GetMapping("/auth")
    @CrossOrigin(origins = "http://localhost:4200")
    public AuthenticationBean auth() {
        return new AuthenticationBean("you are authenticated");
    }

    @GetMapping("/usersbyemail/{email}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User getUserByEmail(@PathVariable String email){
        return userRepository.findByEmail(email);
    }
}
