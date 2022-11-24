import React from 'react';
import PropTypes from 'prop-types';
import JoinMission from './JoinMission';

export default function NameAndDescription({
  missionName, description,
}) {
  return (
    <tr className="body-column-row">
      <td className="column-data-body">{missionName}</td>
      <td className="column-data-body">{description}</td>
      <td className="column-data-body">
        <div className="membership-stat">
          NOT A MEMBER
        </div>
      </td>
      <td className="column-data-body">
        <JoinMission />
      </td>
    </tr>
  );
}

NameAndDescription.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
