import { useState } from 'react';

const FormXX = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name); // key
    console.log(e.target.value); // value

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData)

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
