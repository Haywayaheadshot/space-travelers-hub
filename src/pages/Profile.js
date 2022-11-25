import React from 'react';
import { useSelector } from 'react-redux';
import ReservedMissions from '../components/dep/ReservedMissions';
import '../styles/profile.css';

export default function Profile() {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved !== false);
  return (
    <>
      <div className="profile-tables-container">
        <table className="rocket-mission-container">
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody className="rockets-missions">
            {
          joinedMissions.map((joined) => (
            <ReservedMissions
              key={joined.id}
              mission={joined.missionName}
            />
          ))
            }
          </tbody>
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
