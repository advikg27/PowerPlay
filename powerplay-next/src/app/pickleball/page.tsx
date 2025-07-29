"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="navbar navbar-dark glass">
            <div className="navbar-container">
                <Link className="navbar-brand navbar-brand-dark" href="/">
                    <Image src="/images/logo.png" alt="PowerPlay Logo" width={40} height={40} />
                    PowerPlay
                </Link>
                <div className="navbar-nav navbar-nav-dark">
                    {[
                        { href: "/", text: "HOME" },
                        { href: "/#about", text: "ABOUT" },
                        { href: "/#events", text: "TOURNAMENTS" },
                        { href: "/#donate", text: "DONATE" },
                        { href: "/#team", text: "OUR TEAM" },
                        { href: "/#contact", text: "CONTACT" }
                    ].map((link) => (
                        <Link key={link.text} href={link.href} className="nav-link nav-link-dark">
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default function PickleballTournamentPage() {
    return (
        <div className="cricket-page">
            <Navbar />

            {/* Header */}
            <div className="pickleball-hero">
                <div className="container">
                    <h1>Pickleball Tournament 2025</h1>
                    <p>July 6, 2025 • 2:00 PM – 7:00 PM</p>
                </div>
            </div>

            {/* About Section */}
            <div className="section section-dark">
                <div className="container">
                    <div className="cricket-card">
                        <h2 className="section-title section-title-light">About the Tournament</h2>
                        <p>
                            The PowerPlay Pickleball Tournament is a fun and inclusive event designed for players of all skill levels. Whether you&apos;re a seasoned player or just starting your pickleball journey, this tournament offers the perfect opportunity to compete, learn, and connect with fellow enthusiasts.
                        </p>
                        <p>
                            <strong>Tournament Format:</strong> Players compete in both singles and doubles categories, with divisions based on skill level to ensure fair and competitive matches. The tournament features round-robin play followed by elimination rounds leading to the championship matches.
                        </p>
                        <p>
                            <strong>Community Focus:</strong> Beyond the competition, this tournament emphasizes sportsmanship, camaraderie, and community building. We believe that pickleball has the power to bring people together and create lasting friendships through the shared love of the game.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tournament Details */}
            <div className="section section-alt-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Tournament Details</h2>
                    <div className="details-card">
                        <div className="details-grid">
                            <div className="detail-item">
                                <h3>Date & Time</h3>
                                <p>July 6, 2025<br />2:00 PM - 7:00 PM</p>
                            </div>
                            <div className="detail-item">
                                <h3>Location</h3>
                                <p>North Texas Racquet Club<br />Frisco, TX</p>
                            </div>
                            <div className="detail-item">
                                <h3>Entry Fee</h3>
                                <p>$15 per player<br />Includes tournament t-shirt</p>
                            </div>
                            <div className="detail-item">
                                <h3>Prize Pool</h3>
                                <p>$100 Cash Prize<br />Trophies for winners</p>
                            </div>
                            <div className="detail-item">
                                <h3>Divisions</h3>
                                <p>Singles & Doubles<br />Beginner, Intermediate, Advanced</p>
                            </div>
                            <div className="detail-item">
                                <h3>Registration</h3>
                                <p>Limited spots available<br />Register early to secure your place</p>
                            </div>
                        </div>
                        <div className="button-group">
                            <a href="https://forms.gle/Em1ggcUNKBDgq23T9" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                                Sign Up Now
                            </a>
                            <a href="#contact" className="btn btn-outline-light">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer footer-dark">
                <div className="footer-content">
                    <p>&copy; 2025 PowerPlay. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
