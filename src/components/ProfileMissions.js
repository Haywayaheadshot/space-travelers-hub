import React from 'react';
import { useSelector } from 'react-redux';
import ReservedMissions from './dep/ReservedMissions';

export default function ProfileMissions() {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved !== false);
  return (
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
  );
}
