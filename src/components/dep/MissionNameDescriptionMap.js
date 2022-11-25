import React from 'react';
import PropTypes from 'prop-types';
import JoinMission from './JoinMission';
import MembershipStat from './MembershipStat';

export default function NameAndDescription({
  id, missionName, description,
}) {
  return (
    <tr className="body-column-row">
      <td className="column-data-body">{missionName}</td>
      <td className="column-data-body">{description}</td>
      <td className="column-data-body">
        <MembershipStat />
      </td>
      <td className="column-data-body">
        <JoinMission id={id} />
      </td>
    </tr>
  );
}

NameAndDescription.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
