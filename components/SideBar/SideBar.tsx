export default function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-green-hd sm:translate-x-0 "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-green-hd">
        <ul className="space-y-2">
          <li className="pb-16">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <svg
                className="w-6 h-6 text-green-t dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                />
              </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-t">
                TicketBok
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">Movie</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Theater</span>{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Live Music</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Events in Ha Noi
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Events in HCM City
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Events in Da Nang
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Arts</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
