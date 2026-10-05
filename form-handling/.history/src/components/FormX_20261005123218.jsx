import { useState } from 'react';

const FormX = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

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
            setFormData({ ...formData, name: e.target.value });
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

export default FormX;
