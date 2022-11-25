import React from 'react';
import ProfileMissions from '../components/ProfileMissions';
import '../styles/profile.css';

export default function Profile() {
  return (
    <>
      <div className="profile-tables-container">
        <table className="rocket-mission-container">
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <ProfileMissions />
        </table>
        <table className="rocket-mission-container">
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            <tr className="rockets-missions">
              <td>Under Construction</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
