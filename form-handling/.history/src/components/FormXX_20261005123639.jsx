import React, { useState } from 'react';

const FormXX = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    console.log('clicked');
    console.log(e);
    // setFormData({ ...formData, name: e.target.value });
  };

  return (
    <div>
      <div>
        <h1>Form Data UI : </h1>
        <p>Name : {formData.name} </p>
        <p>Email : {formData.email}</p>
      </div>

      <div>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="name"
        />
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="email"
        />
      </div>
    </div>
  );
};

export default FormXX;
