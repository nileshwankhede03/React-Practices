import { useNavigate } from "react-router";

export default function Login() {
    useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
          <p className="mt-2 text-gray-500">Sign in to continue</p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            Forgot password?
          </a>
        </div>

        <button className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
          Sign In
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-semibold text-orange-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
