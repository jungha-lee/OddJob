package com.OddJob;

import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
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
    public List<Job> getAllJobs () {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        return jobs;
    }

    @GetMapping("/jobs/{id}")
    public Job getAllJobs(@PathVariable Long id){
        return jobRepository.findById(id).get();
    }

    @PostMapping("/jobs")
    public Job postJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @PostMapping("/applications")
    public Application postApplication(@RequestBody Application application) {
        return applicationRepository.save(application);
    }

    @GetMapping("/locations")
    public List<Location> getAllLocations () {
        List<Location> locations = (List<Location>) locationRepository.findAll();
        return locations;
    }

    @GetMapping("/locations/{id}")
    public Location getAllLocations(@PathVariable Long id){
        return locationRepository.findById(id).get();
    }

    @PostMapping("/locations")
    public Location postLocation(@RequestBody Location location) {
        return locationRepository.save(location);
    }

    @GetMapping("/applications")
    public List<Application> getAllApplications () {
        List<Application> applications = (List<Application>) applicationRepository.findAll();
        return applications;
    }

    @GetMapping("/applications/{id}")
    public List<Application> getApplicationsByJobId (@PathVariable Long id) {
        Job job = jobRepository.findById(id).get();

        return (List<Application>) applicationRepository.findByjobId(job);

    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return (List<User>)userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getAllUsers(@PathVariable Long id){
        return userRepository.findById(id).get();
    }

    @PostMapping("/users")
    public ResponseEntity<?> postUser(@RequestBody User user, Principal principal) {
        if (userRepository.findById(user.getId()).get().getEmail().equals(user.getEmail()) &&principal.getName().equals(user.getEmail())){
            if (user.getPassword() == null) {
                user.setPassword(userRepository.findByEmail(user.getEmail()).getPassword());
            } else {
                user.setPassword(encoder.encode(user.getPassword()));
            }
            System.out.println(user.getProfilePic());
            return new ResponseEntity<User>(userRepository.save(user), HttpStatus.OK);
        } else
            return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
    }

    @GetMapping("/principal")
    public Principal userDetails(Principal principal){
        return principal;
    }

    @PostMapping("/users/register")
    public User registerUser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) == null) {
            user.setPassword(encoder.encode(user.getPassword()));
            System.out.println(user.getProfilePic());
            return userRepository.save(user);
        } else return null;
    }

    @GetMapping("/users/jobs/{id}")
    public List<Job> getJobsOwnedByUser(@PathVariable Long id){
        return (List<Job>)jobRepository.findByOwner_Id(id);
    }

//    @GetMapping("/users/applications/{id}")
//    @CrossOrigin(origins = "http://localhost:4200")
//    public List<Job> getJobAppliedByUser(@PathVariable Long id){
//
//        User user = userRepository.findById(id).get();
//
//        List<Application> applications = applicationRepository.findJob_IdByApplicantId(user);
//        List<Job> jobs = new ArrayList<>();
//        for(Application app: applications){
//            jobs.add(app.getJobId());
//        }
//        return jobs;
//    }

    @GetMapping("/users/applications/{id}")
    public List<Application> getApplicationsByUserId(@PathVariable Long id){

        User user = userRepository.findById(id).get();

        List<Application> applications = applicationRepository.findJob_IdByApplicantId(user);
        return applications;
    }

    @GetMapping("/auth")
    public AuthenticationBean auth() {
        return new AuthenticationBean("you are authenticated");
    }

    @GetMapping("/usersbyemail/{email}")
    public User getUserByEmail(@PathVariable String email){
        return userRepository.findByEmail(email);
    }

    @DeleteMapping("applications/{id}")
    public void removeApplication(@PathVariable Long id) {
        System.out.println("triggered");
        applicationRepository.deleteById(id);
    }

    @DeleteMapping("jobs/{id}")
    public void removeJobs(@PathVariable Long id) {
        jobRepository.deleteById(id);
    }

    @DeleteMapping("locations/{id}")
    public void removeLocations(@PathVariable Long id) {
        locationRepository.deleteById(id);
    }

    @DeleteMapping("users/{id}")
    public void removeUsers(@PathVariable Long id) {
        userRepository.deleteById(id);
    }


}
