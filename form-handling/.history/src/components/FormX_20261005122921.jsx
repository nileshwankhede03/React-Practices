import React, { useState } from 'react';

const FormX = () => {

  const [first, setfirst] = useState(second)
  return (
    <div>
      <div>
        <h1>Form Data UI : </h1>
        <p>Name : {} </p>
        <p>Email : {}</p>
      </div>

      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
      </div>
    </div>
  );
};

export default FormX;
