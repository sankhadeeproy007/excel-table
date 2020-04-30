import React from 'react';
import PropTypes from 'prop-types';

export default function MyComponent({ name }) {
  return <div>{name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
