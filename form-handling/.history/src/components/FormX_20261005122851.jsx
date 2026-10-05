import React from 'react';

const FormX = () => {
  return (
    <div>
      <div>
        <h1>Form Data UI : </h1>
        <p>Name : {name} </p>
        <p>Email : {email}</p>
      </div>

      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
      </div>
    </div>
  );
};

export default FormX;
