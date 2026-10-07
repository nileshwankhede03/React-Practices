import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Create form</h1>
      <form className='w-60 flex flex-col gap-3 rounded border border-white'>
        <input c type="text" placeholder="Name" />
        <input c type="email" placeholder="Email" />
        <input c type="number" placeholder="Mobile" />
        <input c type="url" placeholder="Image" />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;
