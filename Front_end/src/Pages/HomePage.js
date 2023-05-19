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
            name: "Elgbrouri Saad",
            email: "elgbouri.saad@gmail.com",
            role: "Backend Developer",
            picture: saad
        },
        {
            name: "Taoui Ranya",
            email: "ranyataoui@outlook.com",
            role: "Ui/Ux Designer",
            picture:  ranya
        },
        {
            name: "Zakari Anas",
            email: "Zakari.anas2000@gmail.com",
            role: "Backend Developer",
            picture: anas
        },
        {
            name: "Zerouali Hamza",
            email: "H.zerouali04@gmail.com",
            role: "Frontend Developer",
            picture:    hamza
        },
        // Add more team members here
    ];

    return (
        <div className="home-body  d-flex justify-content-center justify-content-center min-vh-100">
            <Navbar />

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-md-4" key={index}>

                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src={member.picture} class="img-fluid rounded-start" alt="member picture"/> 
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{member.name}</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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