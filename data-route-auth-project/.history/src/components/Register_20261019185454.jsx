import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
// import { useContext } from 'react';
// import { UserStore } from '../context/UserContext';

export default function Register() {
  console.log('re-rendered register form');
  //   const { users, setUsers } = useContext(UserStore);
  //   console.log(users);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = (data) => {
    // setUsers(data);
    localStorage.setItem('users', JSON.stringify(data));
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-8">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-2xl"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="mt-2 text-gray-500">Sign up to get started</p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register('username', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Min length is 2' },
            })}
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
          <p className="text-red-600">{errors.username?.message}</p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
            })}
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
          <p className="text-red-600">{errors.email?.message}</p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password must contain 8 characters, uppercase, lowercase, number and special character',
              },
            })}
            type="password"
            placeholder="Create a password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
          <p className="text-red-600 text-sm">{errors.password?.message}</p>
        </div>

        <button className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
          Create Account
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a
            onClick={() => navigate('/')}
            className="font-semibold text-orange-600 hover:underline cursor-pointer"
          >
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
