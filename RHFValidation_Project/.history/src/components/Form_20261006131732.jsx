import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Create form</h1>
      <form className='w-60 flex flex-col gap-3 rounded border border-white'>
        <input className='' type="text" placeholder="Name" />
        <input className='' type="email" placeholder="Email" />
        <input className='' type="number" placeholder="Mobile" />
        <input className='' type="url" placeholder="Image" />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;
