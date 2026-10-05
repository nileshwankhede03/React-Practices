import { useState } from 'react';

const Form = () => {
  // brute force
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <div>
        <h1>Form Data UI : </h1>
        <p>Name : {name} </p>
        <p>Email : {email}</p>
      </div>

      <div>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="name" />
        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="email" />
      </div>
    </div>
  );
};

export default Form;
