import React from 'react';
import PropTypes from 'prop-types';

class Planetcard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (

      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
Planetcard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
};
Planetcard.defaultProps = {
  planetImage: 'Stranger',
  planetName: 'Stranger',
};

export default Planetcard;
