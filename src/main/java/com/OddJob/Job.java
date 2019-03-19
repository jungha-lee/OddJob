package com.OddJob;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Job {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @OneToOne
    private Location location;
    private String jobPic;
    @ManyToOne
    @JoinColumn(name="owner_id")
    private User owner;
    private double price;
    private LocalDate date;

    public Job() {

    }

    public Job(Long id, String title, String description, Location location, String jobPic, double price, User ownerId, LocalDate date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.jobPic = jobPic;
        this.price = price;
        this.owner = ownerId;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getJobPic() {
        return jobPic;
    }

    public void setJobPic(String jobPic) {
        this.jobPic = jobPic;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public User getOwnerId() {
        return owner;
    }

    public void setOwnerId(User ownerId) {
        this.owner = ownerId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
