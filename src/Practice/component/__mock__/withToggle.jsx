import React from 'react';

const MockedHOC = (Component) => (props) => {
  return <Component {...props} active={true} />;
};

export default MockedHOC;