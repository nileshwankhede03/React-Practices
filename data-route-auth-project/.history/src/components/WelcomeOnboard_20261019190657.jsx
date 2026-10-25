export default function WelcomeOnboard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-2xl">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <span className="text-4xl">🎉</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome Onboard!
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-500">
            We're excited to have you here. Your journey starts today! Let's
            make something amazing together.
          </p>

          {/* Success Message */}
          <div className="mt-6 rounded-xl bg-orange-50 p-4">
            <p className="font-medium text-orange-700">
              🚀 You're all set to get started!
            </p>
          </div>

          {/* Button */}
          <button className="mt-8 w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Get Started
          </button>

          <p className="mt-6 text-sm text-gray-400">
            Thank you for joining us ❤️
          </p>
        </div>
      </div>
    </>
  );
}
