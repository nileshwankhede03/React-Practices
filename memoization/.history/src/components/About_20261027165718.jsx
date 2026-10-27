import React from 'react';

const About = () => {
  console.log('About re-render');
  return <div>About this side</div>;
};

export default React.memo(About, (prevProps, nextProps) => {
    console.log("prevProps -> ",prevProps)
    console.log("nextProps -> ")
});
