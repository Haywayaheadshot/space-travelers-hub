import React from 'react';
import PropTypes from 'prop-types';

export default function MembershipStat({ reserved }) {
  return (
    <>
      {!reserved && (
      <button type="button" className="membership-stat">NOT A MEMBER</button>
      )}
      {reserved && (
      <button type="button" className="active-membership-stat">Active member</button>
      )}
    </>
  );
}

MembershipStat.propTypes = {
  reserved: PropTypes.bool.isRequired,
};
