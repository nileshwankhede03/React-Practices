import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Create form</h1>
      <form className='w-60 flex flex-col gap-3 rounded border border-white'>
        <input className='p-2 rounded outline-0' type="text" placeholder="Name" />
        <input className='p-2 rounded' type="email" placeholder="Email" />
        <input className='p-2 rounded ' type="number" placeholder="Mobile" />
        <input className='p-2 rounded ' type="url" placeholder="Image" />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;
