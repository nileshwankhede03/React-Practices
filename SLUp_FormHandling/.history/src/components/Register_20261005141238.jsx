import { useState } from 'react';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  password: '',
};
const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user, formData]);

    setFormData({ ...for });
  };

  console.log(user);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>

          <p className="mt-2 text-sm text-slate-400">
            Create your account to get started
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>

              <input
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>

              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </label>

              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
            >
              Create Account
            </button>
          </div>

          {/* Login */}
          <div className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <button
              onClick={() => {
                setToggle((prev) => {
                  return !prev;
                });
              }}
              type="button"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © 2026 Your App. All rights reserved.
        </p>
      </form>
    </div>
  );
};

export default Register;
