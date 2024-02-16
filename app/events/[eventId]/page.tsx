import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import React from "react";
export default function DetailsPage({
  params,
}: {
  params: { eventId: String };
}) {
  return (
    <>
      <div className="grid md:grid-cols-1 mt-3 justify-items-center p-1/2">
        <div className="grid gap-4">
          <div className="justify-center max-w-7xl">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2024/01/24/8FD790.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-green-t rounded-lg mt-3">
          <div className="md:flex md:justify-between">
            <div className="grid md:grid-cols-3 mb-6 md:mb-0 ml-8 ">
              <span className="text-3xl font-extralight text-green-bg">
                SUPER JUNIOR-L.S.S. THE SHOW : Th3ee Guys in HO CHI MINH
              </span>
              <span></span>
              <button
                type="button"
                className="text-xl font-thin transition-colors py-2.5 px-5 me-2 mb-2 text-green-bg focus:outline-none bg-green-hd rounded-full border hover:bg-green-bg hover:text-green-t focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                Book The Show
              </button>
            </div>
          </div>
          <div className="mb-6 md:mb-0 ml-8 mt-6">
            <div className="flex">
              <svg
                className="w-8 h-8 text-green-t2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"
                />
              </svg>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ml-4 text-xl">
                <span className="mb-3 font-bold text-green-bg">
                  18:00 - 20:00, 23 Mar, 2024
                </span>
              </p>
            </div>
          </div>
          <div className="mb-6 md:mb-0 ml-8 mt-6">
            <div className="flex">
              <svg
                className="w-8 h-8 text-green-t2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 10"
              >
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
              </svg>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ml-4 text-xl">
                <span className="mb-3 font-bold text-green-bg">
                  Military Zone 7 Indoor Sports Complex
                </span>
              </p>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">
              <span className="mb-3 font-light text-green-bg text-xl">
                202 Đ. Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, Thành Phố Hồ Chí
                Minh
              </span>
            </p>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="mb-6 md:mb-0 ml-8 mt-6">
            <div className="flex">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ml-4 text-xl">
                <span className="mb-3 font-bold text-green-bg">
                  From: 1.800.000 đ
                </span>
              </p>
            </div>
          </div>
          <Accordion alwaysOpen>
            <AccordionPanel>
              <AccordionTitle className="bg-green-t hover:bg-green-hd border-green-t text-green-bg hover:text-green-t text-2xl">
                About
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-green-bg text-lg">
                  Điều khoản và Điều kiện: Chương trình không dành cho trẻ em từ
                  5 tuổi trở xuống. Term and Conditions: No admission for
                  children aged 5 years or below.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="bg-green-t hover:bg-green-hd border-green-t text-green-bg hover:text-green-t text-2xl">
                Ticket Information
              </AccordionTitle>
              <AccordionContent>
                <div className="flex">
                  <p className="mb-2 text-green-bg start-0">VIP STANDING</p>
                  <p className="font-bold text-green-bg ml-6">4.500.000 đ</p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="bg-green-t hover:bg-green-hd border-green-t text-green-bg hover:text-green-t text-2xl">
                Organizer
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-green-bg">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-green-bg">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-green-bg">
                  Learn more about these technologies:
                </p>
                <ul className="list-disc pl-5 text-green-bg">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </>
  );
}
