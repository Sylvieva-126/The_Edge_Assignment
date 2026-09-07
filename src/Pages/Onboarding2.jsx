import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/styles.css';

export default function Onboarding2() {
  const [teachingMode, setTeachingMode] = useState('Online');

  const options = ['Online', 'In-Person', 'Both'];

  return (
    <main className="onboarding-container animate-in">
      <div className="progress-bar">
        {/* Step 1 */}
        <div className="progress-step">
          <div className="step-circle completed"></div>
          <span className="text-xs">STEP 1<br />Profile Information</span>
        </div>

        {/* Step 2 */}
        <div className="progress-step">
          <div className="step-circle completed"></div>
          <span className="text-xs">STEP 2<br />Documents Upload</span>
        </div>

        {/* Step 3 */}
        <div className="progress-step">
          <div className="step-circle completed"></div>
          <span className="text-xs">STEP 3<br />Availability Setup</span>
        </div>

        {/* Step 4 */}
        <div className="progress-step">
          <div className="step-circle completed"></div>
          <span className="text-xs">STEP 4<br />Review and Submit</span>
        </div>
      </div>

      <section>
        <h2>Availability Setup</h2>
        <p className="text-sm text-muted" style={{ marginBottom: '2rem' }}>
          Tell us your preferred teaching times so we can match you with students more effectively.
        </p>

        <div>
          <h4>Teaching Mode</h4>
          <div className="toggle-group">
            {options.map((mode) => (
              <button
                key={mode}
                type="button"
                className={`toggle-btn ${teachingMode === mode ? 'active' : ''}`}
                onClick={() => setTeachingMode(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4>Availability Notes (Optional)</h4>
          <textarea className="notes-box"></textarea>
        </div>
      </section>

      <footer className="footer-actions">
        <Link to="/onboarding-1" className="btn">← Back</Link>
        <Link to="/dashboard" className="btn">Next →</Link>
      </footer>
    </main>
  );
}