import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reservedMissions, leaveMission } from '../../redux/missions/Missions';

export default function JoinMission({ id, reserved }) {
  const dispatch = useDispatch();
  const reserve = () => (
    dispatch(reservedMissions(id))
  );
  const leftMission = () => {
    dispatch(leaveMission(id));
  };
  return (
    <>
      {!reserved && (
      <button onClick={reserve} type="button" id={id} className="join-misson">Join Mission</button>
      )}
      {reserved && (
      <button onClick={leftMission} type="button" id={id} className="leave-misson">LEAVE MISSION</button>
      )}
    </>
  );
}

JoinMission.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
