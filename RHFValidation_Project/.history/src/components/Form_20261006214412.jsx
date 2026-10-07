import { useForm } from 'react-hook-form';

const Form = () => {
  let {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);

    reset();
  };

  console.log('register -> ', {...register('username',{disabled:true})});

  return (
    <div className="flex flex-col gap-6 items-center text-white">
      <h1 className="text-xl font-bold">Create form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 p-4 bg-black flex flex-col gap-3 rounded border border-white text-white"
      >
        <input
          {...register('username')}
          className="p-2 rounded outline-0 border border-white text-white"
          type="text"
          placeholder="Name"
        />
        <input
          {...register('email')}
          className="p-2 rounded outline-0 border border-white text-white"
          type="email"
          placeholder="Email"
        />
        <input
          {...register('mobileNumber')}
          className="p-2 rounded outline-0 border border-white text-white"
          type="number"
          placeholder="Mobile"
        />
        <input
          {...register('image')}
          className="p-2 rounded outline-0 border border-white text-white"
          type="url"
          placeholder="Image"
        />
        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
