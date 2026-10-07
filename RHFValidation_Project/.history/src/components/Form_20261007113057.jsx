import { useForm } from 'react-hook-form';

const Form = ({ setUser, editUser }) => {
  let {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onchange',
    defaultValues: {
      username: editUser?.username,
      email: editUser?.email,
      mobileNumber: editUser?.mobileNumber,
      image: editUser?.image,
    },
  });

  const formSubmit = (data) => {
    // console.log(data);

    setUser((prev) => [...prev, data]);

    reset();
  };

  // console.log('register -> ', {...register('username')});

  // console.log(errors);

  return (
    <div className="flex flex-col gap-6 items-center text-white">
      <h1 className="text-xl font-bold">Create form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 p-4 bg-black flex flex-col gap-3 rounded border border-white text-white"
      >
        <input
          {...register('username', {
            required: 'Name is required',
            pattern: {
              value: /^\S.*$/,
              message: 'Blank spaces is not allowed',
            },
          })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="text"
          placeholder="Name"
        />
        {errors?.username && (
          <p className="text-red-500">{errors?.username?.message}</p>
        )}

        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please enter valid email',
            },
          })}
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
            maxLength: { value: 10, message: 'Maximum 10 digits are required' },
            minLength: {
              value: 10,
              message: 'Minimum 10 digits are required',
            },
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
