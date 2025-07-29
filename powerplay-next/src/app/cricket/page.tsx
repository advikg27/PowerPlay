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

export default function CricketTournamentPage() {
    return (
        <div className="cricket-page">
            <Navbar />

            {/* Header */}
            <div className="cricket-hero">
                <div className="container">
                    <h1>Cricket Tournament 2025</h1>
                    <p>January 11 – June 19, 2025 • Frisco, TX</p>
                </div>
            </div>

            {/* About Section */}
            <div className="section section-dark">
                <div className="container">
                    <div className="cricket-card">
                        <h2 className="section-title section-title-light">About the Tournament</h2>
                        <p>
                            The PowerPlay Cricket Tournament is our flagship event, bringing together teams from across the region for an exciting season of competitive cricket. This tournament spans multiple months, providing players with the opportunity to showcase their skills, build lasting friendships, and experience the thrill of organized competition.
                        </p>
                        <p>
                            <strong>Tournament Format:</strong> Teams compete in a league format with playoffs leading to the championship match. Each team plays multiple matches throughout the season, ensuring plenty of action and opportunities for all participants.
                        </p>
                        <p>
                            <strong>Community Focus:</strong> Beyond the competition, this tournament emphasizes sportsmanship, teamwork, and community building. We believe that cricket has the power to bring people together and create meaningful connections that extend beyond the field.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scorecard Section */}
            <div className="section section-alt-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Recent Match Results</h2>
                    <div className="scorecard-card">
                        <div className="scorecard-row winner">🏆 Team Blue Eagles - 185/6 (20 overs)</div>
                        <div className="scorecard-row">Team Red Lions - 172/8 (20 overs)</div>
                        <div className="scorecard-mvp">⭐ MVP: Rahul Sharma (Blue Eagles) - 45 runs, 3 wickets</div>
                    </div>
                    <div className="button-group">
                        <a href="#standings" className="btn btn-outline-light">View Standings</a>
                        <a href="#highlights" className="btn btn-outline-light">Match Highlights</a>
                    </div>
                </div>
            </div>

            {/* Standings Section */}
            <div className="section section-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Current Standings</h2>
                    <div className="standings-card">
                        <div className="table-container">
                            <table className="standings-table">
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Team</th>
                                        <th>P</th>
                                        <th>W</th>
                                        <th>L</th>
                                        <th>NRR</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className="team-name">Blue Eagles</td>
                                        <td>8</td>
                                        <td>7</td>
                                        <td>1</td>
                                        <td>+1.85</td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="team-name">Red Lions</td>
                                        <td>8</td>
                                        <td>6</td>
                                        <td>2</td>
                                        <td>+1.23</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="team-name">Green Warriors</td>
                                        <td>8</td>
                                        <td>5</td>
                                        <td>3</td>
                                        <td>+0.67</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className="team-name">Yellow Strikers</td>
                                        <td>8</td>
                                        <td>4</td>
                                        <td>4</td>
                                        <td>+0.12</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td className="team-name">Purple Panthers</td>
                                        <td>8</td>
                                        <td>3</td>
                                        <td>5</td>
                                        <td>-0.45</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td className="team-name">Orange Crushers</td>
                                        <td>8</td>
                                        <td>2</td>
                                        <td>6</td>
                                        <td>-0.89</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td className="team-name">Pink Phoenix</td>
                                        <td>8</td>
                                        <td>2</td>
                                        <td>6</td>
                                        <td>-1.12</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td className="team-name">Black Knights</td>
                                        <td>8</td>
                                        <td>1</td>
                                        <td>7</td>
                                        <td>-1.45</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tournament Highlights */}
            <div className="section section-alt-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Tournament Highlights</h2>
                    <div className="highlights-grid">
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay1.jpeg" alt="Cricket Match Action" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay2.jpeg" alt="Team Celebration" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay3.jpeg" alt="Cricket Tournament" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay4.jpeg" alt="Cricket Match Highlights" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay5.jpeg" alt="Tournament Action" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay6.jpeg" alt="Cricket Tournament Highlights" className="highlight-image" width={350} height={250} />
                            </div>
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
