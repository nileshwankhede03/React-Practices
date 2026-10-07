const Form = () => {
  return (
    <div className="flex flex-col gap-6  text-white">
      <h1>Create form</h1>
      <form className="w-60 p-4 flex flex-col gap-3 rounded border border-white text-white">
        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="number"
          placeholder="Mobile"
        />
        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="url"
          placeholder="Image"
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;
