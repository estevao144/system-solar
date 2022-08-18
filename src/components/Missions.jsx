import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (

      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((key) => (
          <MissionCard
            name={ key.name }
            year={ key.year }
            country={ key.country }
            destination={ key.destination }
            key={ key.name }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
