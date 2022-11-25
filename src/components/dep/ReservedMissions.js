import React from 'react';
import PropTypes from 'prop-types';

export default function ReservedMissions({ mission }) {
  return (
    <tr className="missions-item-container">
      <td className="profile-missions-list">{mission}</td>
    </tr>
  );
}

ReservedMissions.propTypes = {
  mission: PropTypes.string.isRequired,
};
