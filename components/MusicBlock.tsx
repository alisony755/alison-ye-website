export default function MusicBlock() {
  return (
    <div className="notion-block">
      <div className="block-header">
        <span className="block-icon">🎵</span>
        <h2 className="block-title">My Coding Playlist</h2>
      </div>
      <div className="block-content">
        <div className="music-container">
          <p className="music-description">
            Some of the songs I like to listen to while coding and working on projects!
          </p>
          <div className="spotify-embed">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/48ZUKB9f8gANo9zKB4Ky2g?utm_source=generator"
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Alison's Coding Playlist"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
