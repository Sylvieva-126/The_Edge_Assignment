import Sidebar from '../Components/Sidebar';
import '../Styles/styles.css';

export default function Students() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content animate-in">
        <header className="top-header">
          <h1>Students</h1>
          <input type="text" className="search-bar" placeholder="🔍 Search..." />
        </header>
        
        <section>
          <p className="text-sm text-muted">View and track students across your classes</p>

          <div className="stats-grid" style={{ marginTop: '2rem' }}>
            <article className="stat-card">
              <h3 className="text-muted text-sm">Total Students</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>20</p>
            </article>
            <article className="stat-card">
              <h3 className="text-muted text-sm">Active Students</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>11</p>
            </article>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span className="text-sm" style={{ fontWeight: 600 }}>Filter by:</span>
              <select className="search-bar" style={{ width: '120px', padding: '0.25rem' }}><option>Student: All</option></select>
              <select className="search-bar" style={{ width: '120px', padding: '0.25rem' }}><option>Class: All</option></select>
            </div>
            <input type="text" placeholder="🔍 Search students" className="search-bar" style={{ width: '250px', padding: '0.25rem 1rem' }} />
          </div>

          <div className="card" style={{ marginTop: '1.5rem', padding: 0 }}>
            <table className="data-table">
              <thead style={{ background: '#f3f4f6' }}>
                <tr>
                  <th colSpan="2">NAME</th>
                  <th>SUBJECT</th>
                  <th>LEVEL</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: '50px' }}><div className="avatar" style={{ width: '30px', height: '30px' }}></div></td>
                  <td style={{ fontWeight: 500 }}>Mustopha Adesina</td>
                  <td className="text-muted">Quran</td>
                  <td className="text-muted">Beginner</td>
                  <td><span className="badge active">Active</span></td>
                </tr>
                <tr>
                  <td><div className="avatar" style={{ width: '30px', height: '30px' }}></div></td>
                  <td style={{ fontWeight: 500 }}>Aisha Adeyemi</td>
                  <td className="text-muted">Fiqh</td>
                  <td className="text-muted">Advanced</td>
                  <td><span className="badge active">Active</span></td>
                </tr>
                <tr>
                  <td><div className="avatar" style={{ width: '30px', height: '30px' }}></div></td>
                  <td style={{ fontWeight: 500 }}>Soffiyah Abd Razaq</td>
                  <td className="text-muted">Siroh</td>
                  <td className="text-muted">Intermediate</td>
                  <td><span className="badge completed">Completed</span></td>
                </tr>
                <tr>
                  <td><div className="avatar" style={{ width: '30px', height: '30px' }}></div></td>
                  <td style={{ fontWeight: 500 }}>Azeez Abd Hafeez</td>
                  <td className="text-muted">Quran</td>
                  <td className="text-muted">Advanced</td>
                  <td><span className="badge active">Active</span></td>
                </tr>
                <tr>
                  <td><div className="avatar" style={{ width: '30px', height: '30px' }}></div></td>
                  <td style={{ fontWeight: 500 }}>Abdulmalik Zayd</td>
                  <td className="text-muted">Arabic</td>
                  <td className="text-muted">Beginner</td>
                  <td><span className="badge completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', borderTop: '1px solid var(--border-color)' }} className="text-sm text-muted">
              <span>Showing 1 of 3</span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span>Previous</span>
                <span style={{ color: 'var(--primary-color)' }}>1</span>
                <span>2</span>
                <span>Next</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}