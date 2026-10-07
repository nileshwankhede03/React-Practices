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

  // console.log('register -> ', {...register('username')});

  return (
    <div className="flex flex-col gap-6 items-center text-white">
      <h1 className="text-xl font-bold">Create form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 p-4 bg-black flex flex-col gap-3 rounded border border-white text-white"
      >
        <div className="p-2 rounded outline-0 border border-white text-white">
          <input {...register('username')} type="text" placeholder="Name" />
        </div>

        <div className="p-2 rounded outline-0 border border-white text-white">
          <input {...register('email')} type="email" placeholder="Email" />
        </div>

        <div> 
          <input
            {...register('mobileNumber')}
            type="number"
            placeholder="Mobile"
          />
        </div>

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
