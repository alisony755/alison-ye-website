export default function ProfileBlock() {
  return (
    <div className="profile-banner-container">
      {/* Banner with background image */}
      <div className="profile-banner" role="banner">
        <img
          src="https://bcmcontrols.com/wp-content/uploads/2023/11/Projectshowcase-image-northeastern@2x-min.png"
          alt="Northeastern University Campus"
          className="banner-background"
        />
      </div>

      {/* Profile image positioned to overlap banner and content */}
      <div className="profile-image-overlay">
        <img
          src="https://i.ibb.co/KLqYtBM/A44-C9-AAC-2832-4-BF9-8-D7-C-09-EF330-CD972-1-102-a.jpg"
          alt="Alison Ye Profile Picture"
          className="profile-image-banner"
        />
      </div>

      {/* Profile info below banner */}
      <div className="profile-info-banner">
        <h1 className="profile-name-banner">Alison Ye</h1>
        <div className="profile-details">
          <div className="profile-detail-item">
            <span className="detail-icon">🎓</span>
            <p>3rd Year Computer Science Major with a Concentration in AI</p>
          </div>
          <div className="profile-detail-item">
            <span className="detail-icon">📍</span>
            <p>Northeastern University, Boston</p>
          </div>
        </div>
      </div>
    </div>
  )
}
