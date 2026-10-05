import React, { useState } from 'react';

const FormXX = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e)=>{

  }

  return (
    <div>
      <div>
        <h1>Form Data UI : </h1>
        <p>Name : {formData.name} </p>
        <p>Email : {formData.email}</p>
      </div>

      <div>
        <input
          onChange={(e) => {
            
          }}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          type="text"
          placeholder="email"
        />
      </div>
    </div>
  );
};

export default FormXX;
