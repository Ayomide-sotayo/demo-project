
import { useState } from "react";

function ProfileForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Profile Form
        </h2>

        <p className="mb-6 text-sm text-gray-500">
          Enter your details below.
        </p>

        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Name
          </label>

          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Age */}
        <div className="mb-6">
          <label
            htmlFor="age"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Age
          </label>

          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
        >
          Submit
        </button>

        {/* Success message */}
        {isSubmitted && (
          <p className="mt-5 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
            Thanks, {name}!
          </p>
        )}
      </form>
    </div>
  );
}

export default ProfileForm;

