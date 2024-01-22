export default function Sidebar() {
    return (
        <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-green-hd sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-green-hd">
          <ul className="space-y-2">
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
                <span className="flex-1 ms-3 whitespace-nowrap">Events in Ha Noi</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Events in HCM City</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-green-t rounded-lg hover:bg-green-bg transition-colors font-light dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Events in Da Nang</span>
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
    )
}