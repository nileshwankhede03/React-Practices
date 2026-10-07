import { useForm } from 'react-hook-form';

const Form = () => {
  let {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: onchange,
  });

  const formSubmit = (data) => {
    console.log(data);

    reset();
  };

  // console.log('register -> ', {...register('username')});

  console.log(errors);

  return (
    <div className="flex flex-col gap-6 items-center text-white">
      <h1 className="text-xl font-bold">Create form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 p-4 bg-black flex flex-col gap-3 rounded border border-white text-white"
      >
        <input
          {...register('username', { required: 'Name is required' })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="text"
          placeholder="Name"
        />
        {errors?.username && (
          <p className="text-red-500">{errors?.username?.message}</p>
        )}

        <input
          {...register('email', { required: 'Email is required' })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="email"
          placeholder="Email"
        />
        {errors?.email && (
          <p className="text-red-500">{errors?.email?.message}</p>
        )}

        <input
          {...register('mobileNumber', {
            required: 'Mobile Number is required',
            max
          })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="number"
          placeholder="Mobile"
        />
        {errors?.mobileNumber && (
          <p className="text-red-500">{errors?.mobileNumber.message}</p>
        )}

        <input
          {...register('image', { required: 'Image is required' })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="url"
          placeholder="Image"
        />
        {errors?.image && (
          <p className="text-red-500">{errors?.image.message}</p>
        )}

        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
