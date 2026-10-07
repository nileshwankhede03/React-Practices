import { useForm } from "react-hook-form";

const Form = () => {

    let {} = useForm()
  return (
    <div className="flex flex-col gap-6 items-center text-white">
      <h1 className="text-xl font-bold">Create form</h1>
      <form className="w-90 p-4 bg-black flex flex-col gap-3 rounded border border-white text-white">
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
        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">Add User</button>
      </form>
    </div>
  );
};

export default Form;
