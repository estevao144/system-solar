import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import Planetcard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((key) => (
          <Planetcard
            planetName={ key.name }
            planetImage={ key.image }
            key={ key.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
