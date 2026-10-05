const Login = ({ setToggle }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
      <form onSubmit={submitHandler} className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to continue to your account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>

              <input
              va
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-200">
                  Password
                </label>
              </div>

              <input
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
            >
              Login
            </button>
          </div>

          {/* Register */}
          <div className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <button
              onClick={() => {
                setToggle((prev) => {
                  return !prev;
                });
              }}
              type="button"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Register
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          © 2026 Your App. All rights reserved.
        </p>
      </form>
    </div>
  );
};

export default Login;
