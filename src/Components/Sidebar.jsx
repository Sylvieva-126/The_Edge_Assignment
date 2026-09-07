import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { credentialsStorageKey } from '../utils/credentials';

export default function Sidebar() {
  const location = useLocation();
  const [tutorName] = useState(() => {
    const storedCredentials = localStorage.getItem(credentialsStorageKey);
    if (!storedCredentials) return "User";

    try {
      const savedAccount = JSON.parse(storedCredentials);
      return [savedAccount.firstName, savedAccount.lastName]
        .filter(Boolean)
        .join(" ") || "User";
    } catch {
      return "User";
    }
  });

  const isActive = (path) => (location.pathname === path ? "nav-link active" : "nav-link");

  return (
    <aside className="sidebar">
      <div className="brand">
        The Edge <br />
        <span className="text-xs text-muted" style={{ fontWeight: 400 }}>Tutor Portal</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link></li>
          <li><Link to="/my-classes" className={isActive('/my-classes')}>My Classes</Link></li>
          <li><Link to="/students" className={isActive('/students')}>Students</Link></li>
          <li><Link to="#" className={isActive('/resources')}>Resources</Link></li>
          <li><Link to="#" className={isActive('/settings')}>Settings</Link></li>
        </ul>
      </nav>
      <div className="user-profile">
        <div className="avatar"></div>
        <div>
          <div className="text-sm dynamic-tutor-name" style={{ fontWeight: 600 }}>{tutorName}</div>
          <div className="text-xs text-muted">Tutor</div>
        </div>
      </div>
      <Link to="/signin" className="logout-btn">← Logout</Link>
    </aside>
  );
}
