import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NameAndDescription from './dep/MissionNameDescriptionMap';
import { getMissons } from '../redux/missions/Missions';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissons());
  }, [dispatch]);
  return (
    <div className="table-container">
      <table>
        <thead className="column-header">
          <tr className="header-column-row">
            <th className="column-data">Mission</th>
            <th className="column-data">Description</th>
            <th className="column-data">Membership</th>
            <th className="column-data">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <NameAndDescription
              key={mission.mission_id}
              missionName={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
