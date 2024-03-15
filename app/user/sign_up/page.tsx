export default function Signin() {
  return (
    <div className="mt-8 pb-16">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-light text-green-t dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className=" transition-colors bg-gray-50 border border-gray-300 text-green-bg text-sm rounded-lg focus:ring-green-bg focus:border-green-bg block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-light text-green-t dark:text-white"
          >
            Your phone number
          </label>
          <input
            type="email"
            id="phone"
            className=" transition-colors bg-gray-50 border border-gray-300 text-green-bg text-sm rounded-lg focus:ring-green-bg focus:border-green-bg block w-full p-2.5"
            placeholder="(+84) 12345678"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-light text-green-t dark:text-white"
            >
              Your first name
            </label>
            <input
              type="email"
              id="phone"
              className=" transition-colors bg-gray-50 border border-gray-300 text-green-bg text-sm rounded-lg focus:ring-green-bg focus:border-green-bg block w-full p-2.5"
              required
            />
          </div>{" "}
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-light text-green-t dark:text-white"
            >
              Your last name
            </label>
            <input
              type="email"
              id="phone"
              className=" transition-colors bg-gray-50 border border-gray-300 text-green-bg text-sm rounded-lg focus:ring-green-bg focus:border-green-bg block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-light text-green-t dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm transition-colors bg-gray-50 border border-gray-300 text-green-bg text-sm rounded-lg focus:ring-green-bg focus:border-green-bg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-bg dark:focus:border-green-bg dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-light text-green-t dark:text-white"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm transition-colors bg-gray-50 border border-gray-300 text-green-bg text-sm rounded-lg focus:ring-green-bg focus:border-green-bg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-bg dark:focus:border-green-bg dark:shadow-sm-light"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-green-t focus:ring-green-hd dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-light text-green-t dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="#" className="text-green-2 hover:underline text-green-t">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-green-hd hover:bg-green-t2 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
}
