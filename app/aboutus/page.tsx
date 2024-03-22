export default function AboutUs() {
  return (
    <div className="">
      <div className="py-32">
        <div className="bg-green-t mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 rounded-lg mt-8">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-green-bg md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-6 text-lg font-normal text-green-hd lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <a
            href="#"
            className="font-thin inline-flex items-center justify-center px-5 py-3 text-base text-center text-white bg-green-hd rounded-lg hover:bg-green-bg focus:ring-4 transition-colors "
          >
            Learn more
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <h2 className="text-4xl text-green-bg font-extrabold dark:text-white">
            Payments tool for companies
          </h2>
          <p className="my-4 text-lg text-gray-500">
            Start developing with an open-source library of over 450+ UI
            components, sections, and pages built with the utility classes from
            Tailwind CSS and designed in Figma.
          </p>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-lg text-green-hd dark:text-blue-500 hover:underline"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
