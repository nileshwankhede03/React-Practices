const UserCard = ({ user, setToggle, handleUpdate, handleDelete }) => {
  // console.log('Key -> ', key);
  return (
    <div className=" p-4 border bg-black border-white flex flex-col gap-2">
      <div className="h-40 w-40">
        <img
          className="object-fit h-full w-full rounded-xl"
          src={user.image}
          alt="img"
        />
      </div>

      <div className="flex flex-col gap-1 text-white">
        <h1>{user.username}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.mobileNumber}</p>
      </div>

      <div className="flex w-full justify-between gap-4">
        <button
          onClick={() => {
            handleUpdate(user.email);
            setToggle((prev) => !prev);
          }}
          className="py-2 px-3 rounded bg-yellow-700 text-white"
        >
          Update
        </button>
        <button onClick={()=>handleDelete()} className="py-2 px-3 rounded bg-red-700 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
