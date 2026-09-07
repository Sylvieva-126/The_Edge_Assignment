import Sidebar from '../Components/Sidebar';
import '../Styles/styles.css';


export default function MyClasses() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content animate-in">
        <header className="top-header">
          <h1>My Classes</h1>
          <input type="text" className="search-bar" placeholder="🔍 Search..." />
        </header>
        
        <section>
          <h2>My Classes</h2>
          <p className="text-sm text-muted">Manage your active and completed classes</p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <input type="text" placeholder="🔍 Search classes" className="search-bar" style={{ width: '250px' }} />
            <select className="search-bar" style={{ width: '150px' }}><option>Subject: All</option></select>
            <select className="search-bar" style={{ width: '150px' }}><option>Status: Active</option></select>
          </div>

          <div className="classes-grid">
            {/* Card 1 */}
            <article className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3>Quran - Beginner</h3>
                <span className="badge active">Active</span>
              </div>
              <div className="text-sm text-muted" style={{ lineHeight: 2 }}>
                <p>👥 Students: 5</p>
                <p>📅 Next Lesson: August 12</p>
                <p>🕒 Time: 2 pm</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', alignItems: 'center' }}>
                <button className="btn-outline" style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>View Class</button>
                <span style={{ color: 'var(--danger-color)', cursor: 'pointer' }}>🗑️</span>
              </div>
            </article>

            {/* Card 2 */}
            <article className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3>Hadith - Beginner</h3>
                <span className="badge active">Active</span>
              </div>
              <div className="text-sm text-muted" style={{ lineHeight: 2 }}>
                <p>👥 Students: 5</p>
                <p>📅 Next Lesson: August 12</p>
                <p>🕒 Time: 2 pm</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', alignItems: 'center' }}>
                <button className="btn-outline" style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>View Class</button>
                <span style={{ color: 'var(--danger-color)', cursor: 'pointer' }}>🗑️</span>
              </div>
            </article>

             {/* Card 3 */}
             <article className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3>Tawheed - Beginner</h3>
                <span className="badge active">Active</span>
              </div>
              <div className="text-sm text-muted" style={{ lineHeight: 2 }}>
                <p>👥 Students: 5</p>
                <p>📅 Next Lesson: August 12</p>
                <p>🕒 Time: 2 pm</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', alignItems: 'center' }}>
                <button className="btn-outline" style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>View Class</button>
                <span style={{ color: 'var(--danger-color)', cursor: 'pointer' }}>🗑️</span>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}