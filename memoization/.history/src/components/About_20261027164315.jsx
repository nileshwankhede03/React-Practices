import React from 'react';

const About = () => {
  console.log('About re-render');
  return <div>About this side</div>;
};

export default React.memo(About);
