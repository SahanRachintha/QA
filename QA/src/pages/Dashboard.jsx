import { FaAmbulance, FaMapMarkerAlt, FaBookMedical, FaTrophy } from "react-icons/fa";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h2>Welcome to FlashAid 🚑</h2>
        <p className="subtitle">Your emergency medical assistant</p>

        <div className="card-grid">
          <div className="dashboard-card">
            <FaAmbulance className="card-icon" />
            <h3>SOS Alert</h3>
            <p>Send an instant emergency signal to responders.</p>
            <button className="card-btn">Activate SOS</button>
          </div>

          <div className="dashboard-card">
            <FaMapMarkerAlt className="card-icon" />
            <h3>Live Location</h3>
            <p>Share your real-time location with medical helpers.</p>
            <button className="card-btn">Share Location</button>
          </div>

          <div className="dashboard-card">
            <FaBookMedical className="card-icon" />
            <h3>First Aid Guides</h3>
            <p>Access quick guides to handle emergencies safely.</p>
            <button className="card-btn">Open Guides</button>
          </div>

          <div className="dashboard-card">
            <FaTrophy className="card-icon" />
            <h3>Leaderboard</h3>
            <p>See top helpers and engage with the community.</p>
            <button className="card-btn">View Leaderboard</button>
          </div>
        </div>
      </div>
    </div>
  );
}
