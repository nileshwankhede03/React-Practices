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
        <input onChange={()=>{}} type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Form;
