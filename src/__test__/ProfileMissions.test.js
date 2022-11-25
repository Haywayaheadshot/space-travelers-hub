import React from 'react';
import { render } from '@testing-library/react';
import ReservedMissions from '../components/dep/ReservedMissions';

describe('Profile Missions Testing', () => {
  it('Should render Profile Missions and compare with Snapshot', () => {
    const { asFragment } = render(<ReservedMissions name="Thaicom" />);
    expect(asFragment(<ReservedMissions name="Thaicom" />)).toMatchSnapshot();
  });
});
