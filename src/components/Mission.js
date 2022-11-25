import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NameAndDescription from './dep/MissionNameDescriptionMap';
import { getMissons } from '../redux/missions/Missions';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissons());
    }
  }, [dispatch, missions.length]);
  return (
    <div className="table-container">
      <table>
        <thead className="column-header">
          <tr className="header-column-row">
            <th className="column-data">Mission</th>
            <th className="column-data">Description</th>
            <th className="column-data">Status</th>
            <th className="column-data"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <NameAndDescription
              key={mission.id}
              id={mission.id}
              missionName={mission.missionName}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
