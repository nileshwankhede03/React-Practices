import React from 'react';

const Home = ({ user }) => {
  console.log('Home re-render');
  return <div>Home this side</div>;
};

export default React.memo(Home, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});
