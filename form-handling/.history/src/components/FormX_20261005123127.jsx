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
        <p>Name : {} </p>
        <p>Email : {}</p>
      </div>

      <div>
        <input onChange={(e)=>{setFormData({...formData , name : })}} type="text" placeholder="name" />
        <input type="text" placeholder="email" />
      </div>
    </div>
  );
};

export default FormX;
