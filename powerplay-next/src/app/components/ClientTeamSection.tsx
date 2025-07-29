"use client";

import React, { useEffect } from 'react';

export default function ClientTeamSection() {
    useEffect(() => {
        const teamColors = [
            "#dc2626", // red
            "#3b82f6", // blue
            "#10b981", // green
            "#f59e0b", // amber
            "#8b5cf6", // purple
            "#ec4899", // pink
            "#14b8a6", // teal
            "#f43f5e"  // rose
        ];
        document.querySelectorAll('.color-bar').forEach(bar => {
            const color = teamColors[Math.floor(Math.random() * teamColors.length)];
            (bar as HTMLElement).style.backgroundColor = color;
        });
    }, []);

    return (
        <section id="team" className="section" style={{ backgroundColor: '#ffffff', padding: '3.5rem 2rem' }}>
            <div className="container text-center">
                <h2 className="section-title">Our Team</h2>
                <p className="section-text">We're a team of passionate leaders working together to grow the game and inspire the next generation.</p>
                <div className="row justify-content-center">
                    {/* Team Members */}
                    {[
                        { img: '/images/raghav.png', name: 'Raghav Sridhar', role: 'Co-Founder & President' },
                        { img: '/images/sriram.png', name: 'Sriram Kandalai', role: 'Co-Founder' },
                        { img: '/images/advik.jpeg', name: 'Advik Gupta', role: 'Vice President / Software Lead' },
                        { img: '/images/ishaan.jpeg', name: 'Ishaan Acharya', role: 'COO' },
                        { img: '/images/yuvi.png', name: 'Yuvi', role: 'Social Media Manager' },
                        { img: '/images/vishnu.jpg', name: 'Vishnu', role: 'CFO' },
                        { img: '/images/vedhas.png', name: 'Vedhas', role: 'CIO' },
                        { img: '/images/rochit.jpg', name: 'Rochit', role: 'Marketing Director' },
                    ].map((member) => (
                        <div className="col-md-4 mb-4" key={member.name}>
                            <div className="card team-card">
                                <div className="color-bar"></div>
                                <div className="img-wrapper">
                                    <img src={member.img} className="card-img-top" alt={member.name} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 