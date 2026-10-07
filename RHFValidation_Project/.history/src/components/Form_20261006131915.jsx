import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Create form</h1>
      <form className="w-60 flex flex-col gap-3 rounded border border-white">
        <input
          className="p-2 rounded outline-0 bor"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 rounded outline-0"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 rounded outline-0"
          type="number"
          placeholder="Mobile"
        />
        <input
          className="p-2 rounded outline-0"
          type="url"
          placeholder="Image"
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;
