import React from 'react';

const UserCard = () => {
  return (
    <div className=" p-4 border border-white flex flex-col">
      <div className="h-40 w-40">
        <img
          className="object-fit h-full w-full"
          src="https://images.unsplash.com/photo-1790801137425-6adfc282486b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1>Name </h1>
        <p className="text-sm">Email</p>
        <p className="text-sm">Contact</p>
      </div>

      <div className='flex w-full justify-between gap-4'>
        <button className='py-2 px-3 rounded bg-yellow-700 text-white'>Update</button>
        <button className='py-2 px-3 rounded bg-red-700 text-white'>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
