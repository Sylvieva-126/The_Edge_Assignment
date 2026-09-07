import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/styles.css';

export default function Onboarding1() {
  const [files, setFiles] = useState({
    govId: null,
    academicCert: null,
    islamicCert: null,
    photo: null,
  });

  const areDocsUploaded = Boolean(files.govId && files.academicCert && files.islamicCert);

  const isProfileInfoUploaded = Boolean(files.photo);

  const isAllUploaded = areDocsUploaded && isProfileInfoUploaded;

  const handleFileChange = (e, fileKey) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFiles((prev) => ({
        ...prev,
        [fileKey]: selectedFile,
      }));
    }
  };

  return (
    <main className="onboarding-container animate-in">
      <div className="progress-bar">
        <div className="progress-step">
          <div className={`step-circle ${isProfileInfoUploaded ? 'completed' : ''}`}></div>
          <span className="text-xs">STEP 1<br />Profile Information</span>
        </div>

        <div className="progress-step">
            <div className={`step-circle ${areDocsUploaded ? 'completed' : 'active'}`}></div>
            <span className="text-xs">STEP 2<br />Documents Upload</span>
        </div>  

        <div className="progress-step">
          <div className="step-circle"></div>
          <span className="text-xs">STEP 3<br />Availability Setup</span>
        </div>

        <div className="progress-step">
          <div className="step-circle"></div>
          <span className="text-xs">STEP 4<br />Review and Submit</span>
        </div>
      </div>

      <section>
        <h2>Documents Upload</h2>
        <p className="text-sm text-muted" style={{ marginBottom: '2rem' }}>Please upload your identification and qualification documents.</p>

        <article className="upload-card">
          <h3>Government-issued ID <span style={{ color: 'red' }}>*</span></h3>
          <p className="text-sm text-muted">For identity verification (e.g. National ID, passport, driver's license)</p>
          <input
            type="file"
            id="govId"
            accept="image/*,.pdf"
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'govId')}
          />
          <label htmlFor="govId" className="btn-upload" style={{ display: 'inline-block', cursor: 'pointer' }}>
            {files.govId ? `✓ ${files.govId.name}` : '↑ Add File'}
          </label>
        </article>

        <article className="upload-card">
          <h3>Academic Certificate <span style={{ color: 'red' }}>*</span></h3>
          <p className="text-sm text-muted">Proof of educational background</p>
          <input
            type="file"
            id="academicCert"
            accept="image/*,.pdf"
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'academicCert')}
          />
          <label htmlFor="academicCert" className="btn-upload" style={{ display: 'inline-block', cursor: 'pointer' }}>
            {files.academicCert ? `✓ ${files.academicCert.name}` : '↑ Add File'}
          </label>
        </article>

        <article className="upload-card">
          <h3>Arabic and Islamic-related Certificates <span style={{ color: 'red' }}>*</span></h3>
          <p className="text-sm text-muted">Proof of Arabic and Islamic education</p>
          <input
            type="file"
            id="islamicCert"
            accept="image/*,.pdf"
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'islamicCert')}
          />
          <label htmlFor="islamicCert" className="btn-upload" style={{ display: 'inline-block', cursor: 'pointer' }}>
            {files.islamicCert ? `✓ ${files.islamicCert.name}` : '↑ Add File'}
          </label>
        </article>

        <article className="upload-card">
          <h3>Profile Photo(Headshot) <span style={{ color: 'red' }}>*</span></h3>
          <p className="text-sm text-muted">Clear photo for your tutor profile</p>
          <input
            type="file"
            id="photo"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, 'photo')}
          />
          <label htmlFor="photo" className="btn-upload" style={{ display: 'inline-block', cursor: 'pointer' }}>
            {files.photo ? `✓ ${files.photo.name}` : '↑ Upload Photo'}
          </label>
        </article>
      </section>

      <footer className="footer-actions">
        <button className="btn" disabled>← Back</button>
        
        {isAllUploaded ? (
          <Link to="/onboarding-2" className="btn">
            Next →
          </Link>
        ) : (
          <button className="btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
            Next →
          </button>
        )}
      </footer>
    </main>
  );
}