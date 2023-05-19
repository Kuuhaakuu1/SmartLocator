import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import "./css/homePage.css";
import omar from '../assets/memberpictures/memberpictures/temsamaniomar.jpg';
import soufiane from '../assets/memberpictures/memberpictures/oukattousoufiane.jpg';
import ranya from '../assets/memberpictures/memberpictures/taouiranya.jpg';
import hamza from '../assets/memberpictures/memberpictures/zeroualihamza.jpg';
import saad from '../assets/memberpictures/memberpictures/elgbourisaad.jpg';
import anas from '../assets/memberpictures/memberpictures/zakarianas.jpg';

function HomePage() {
    const teamMembers = [
        {
            name: "Temsamani Omar",
            email: "omartemsamani22@gmail.com",
            role: "Scrum Master CTO",
            picture: omar
        },
        {
            name: "Oukattou Soufiane",
            email: "Soufiane321oukattou@gmail.com",
            role: "Lead Developer",
            picture: soufiane
        },
        {
            name: "Zerouali Hamza",
            email: "H.zerouali04@gmail.com",
            role: "Frontend Developer",
            picture:    hamza
        },
        {
            name: "Taoui Ranya",
            email: "ranyataoui@outlook.com",
            role: "Ui/Ux Designer",
            picture:  ranya
        },
        {
            name: "Elgbrouri Saad",
            email: "elgbouri.saad@gmail.com",
            role: "Backend Developer",
            picture: saad
        },
        
        {
            name: "Zakari Anas",
            email: "Zakari.anas2000@gmail.com",
            role: "Backend Developer",
            picture: anas
        },
        
        // Add more team members here
    ];

    return (
        <div className="home-body d-flex justify-content-center align-items-center min-vh-100">
          <Navbar />
      
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-12" style={{ marginBottom: "50px", marginTop: "50px" }}>
                <h1 className="text-center text-white">Our Team</h1>
              </div>
      
              {teamMembers.map((member, index) => (
                <div className="col-md-4 " key={index}>
                  <div className="card mb-3 teamcard" style={{ height: "150px", overflow: "hidden" }}>
                    <div className="row ">
                      <div className="col-md-4 ">
                        <img src={member.picture} className="col-md-12 img-fluid rounded-start" alt="member picture" style={{ height: "100%", objectFit: "cover" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body ">
                          <h5 className="card-title teamcard-title">{member.name} <br /> <small style={{ fontSize: 13 }} className="text-muted">{member.role}</small> </h5>
                          <p className="card-text"> </p>
                          <p className="card-text"> {member.email} </p>
                          <p className="card-text"><small className="text-muted"></small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
      
            </div>
          </div>
        </div>
      );
      
}

export default HomePage;