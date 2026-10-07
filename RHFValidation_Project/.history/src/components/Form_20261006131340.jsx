import React from 'react';

const Form = () => {
  return (
    <div className='fl'>
      <h1>Create form</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Mobile" />
        <input type="url" placeholder="Image" />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;
