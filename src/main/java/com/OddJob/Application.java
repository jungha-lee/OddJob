package com.OddJob;


import javax.persistence.*;

@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name="job_id")
    private Job jobId;
    @ManyToOne
    @JoinColumn(name="applicant_id")
    private User applicantId;
    private String status;
    private String applicantMsg;

    public Application() {}

    public Application(String status) {}

    public Application(Job jobId, User applicantId, String status, String applicantMsg) {
        this.jobId = jobId;
        this.applicantId = applicantId;
        this.status = status;
        this.applicantMsg = applicantMsg;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Job getJobId() {
        return jobId;
    }

    public void setJobId(Job jobId) {
        this.jobId = jobId;
    }

    public User getApplicantId() {
        return applicantId;
    }

    public void setApplicantId(User applicantId) {
        this.applicantId = applicantId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApplicantMsg() {
        return applicantMsg;
    }

    public void setApplicantMsg(String applicantMsg) {
        this.applicantMsg = applicantMsg;
    }
}
