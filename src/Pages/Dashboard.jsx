import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import '../Styles/styles.css';
import { credentialsStorageKey } from '../utils/credentials';

export default function Dashboard() {
  const [tutorName] = useState(() => {
    const storedCredentials = localStorage.getItem(credentialsStorageKey);
    if (!storedCredentials) return "Mustopha Adesina";

    try {
      const savedAccount = JSON.parse(storedCredentials);
      return savedAccount.firstName || "Mustopha Adesina";
    } catch {
      return "Mustopha Adesina";
    }
  });

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content animate-in">
        <header className="top-header">
          <h1>Dashboard</h1>
          <input type="text" className="search-bar" placeholder="🔍 Search..." />
        </header>

        <section>
          <h2>Welcome back, {tutorName} 👋</h2>
          <p className="text-sm text-muted" style={{ marginBottom: '2rem' }}>Here is your teaching overview for today</p>
          
          <div className="stats-grid">
            <article className="stat-card">
              <h3 className="text-muted text-sm">Total Students</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>20</p>
            </article>
            <article className="stat-card">
              <h3 className="text-muted text-sm">Active Classes</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>0</p>
            </article>
            <article className="stat-card">
              <h3 className="text-muted text-sm">Upcoming Lessons</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>3</p>
            </article>
            <article className="stat-card">
              <h3 className="text-muted text-sm">Completed Lessons</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>4</p>
            </article>
          </div>

          <div className="dashboard-grid">
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3>Today's Schedule</h3>
                <span className="text-sm text-muted">Tuesday, November 3rd, 2026</span>
              </div>
              
              <div className="schedule-item">
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>09:00 AM</div>
                </div>
                <div style={{ flex: 1, marginLeft: '2rem' }}>
                  <h4>Quran</h4>
                  <span className="text-xs text-muted">5 students • 1 hour</span>
                </div>
                <button className="btn-primary">Start Session</button>
              </div>
              <div className="schedule-item">
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>12:00 PM</div>
                </div>
                <div style={{ flex: 1, marginLeft: '2rem' }}>
                  <h4>Fiqh</h4>
                  <span className="text-xs text-muted">5 students • 1 hour</span>
                </div>
                <button className="btn-outline">View Details</button>
              </div>
              <div className="schedule-item">
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>05:00 PM</div>
                </div>
                <div style={{ flex: 1, marginLeft: '2rem' }}>
                  <h4>Hadith</h4>
                  <span className="text-xs text-muted">5 students • 1 hour</span>
                </div>
                <button className="btn-outline">View Details</button>
              </div>
            </div>

            <div>
              <div className="card">
                <h3>Quick Actions</h3>
                <div className="schedule-item" style={{ border: 'none', cursor: 'pointer' }}>
                  <div>
                    <h4 className="text-sm">Create New Class</h4>
                    <span className="text-xs text-muted">Schedule a session</span>
                  </div>
                  <span>&gt;</span>
                </div>
                <div className="schedule-item" style={{ border: 'none', cursor: 'pointer' }}>
                  <div>
                    <h4 className="text-sm">Upload Resources</h4>
                    <span className="text-xs text-muted">Share files with students</span>
                  </div>
                  <span>&gt;</span>
                </div>
              </div>
              <div className="card">
                <h3>Notifications</h3>
                <div style={{ marginTop: '1rem' }}>
                  <p className="text-sm">New booking request from Aisha</p>
                  <span className="text-xs text-muted">2 mins ago</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <p className="text-sm text-muted">Session for Tawheed cancelled</p>
                  <span className="text-xs text-muted">9 mins ago</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}