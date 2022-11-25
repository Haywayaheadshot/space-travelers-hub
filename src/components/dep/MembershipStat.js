import React from 'react';
import PropTypes from 'prop-types';

export default function MembershipStat({ reserved }) {
  return (
    <>
      {!reserved && (
      <h1 type="button" className="membership-stat">NOT A MEMBER</h1>
      )}
      {reserved && (
      <h1 type="button" className="active-membership-stat">Active member</h1>
      )}
    </>
  );
}

MembershipStat.propTypes = {
  reserved: PropTypes.bool.isRequired,
};
