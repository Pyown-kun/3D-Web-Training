import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Garage from "../model/Garage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = () => {
  // // const { isRotating, setIsRotation } = useState(false);
  // const adjustGarage = () => {
  //   let garageScale = 1.0;
  //   let garagePosition = null;
  //   let garageRotation = [-Math.PI / 2.3, 0, -0.8];
  //   return [garageScale, garagePosition, garageRotation];
  // };
  // return (
  //   <div className="absolute top-20 left-20 right-20 z-10">
  //     <div
  //       id="controls-carousel"
  //       class="relative w-full  bg-white border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  //       data-carousel="static"
  //     >
  //       <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
  //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
  //           <img
  //             src="/docs/images/carousel/carousel-1.svg"
  //             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  //             alt="..."
  //           />
  //         </div>
  //         <div
  //           class="hidden duration-700 ease-in-out"
  //           data-carousel-item="active"
  //         >
  //           <img
  //             src="/docs/images/carousel/carousel-2.svg"
  //             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  //             alt="..."
  //           />
  //         </div>
  //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
  //           <img
  //             src="/docs/images/carousel/carousel-3.svg"
  //             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  //             alt="..."
  //           />
  //         </div>
  //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
  //           <img
  //             src="/docs/images/carousel/carousel-4.svg"
  //             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  //             alt="..."
  //           />
  //         </div>
  //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
  //           <img
  //             src="/docs/images/carousel/carousel-5.svg"
  //             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  //             alt="..."
  //           />
  //         </div>
  //         <button
  //           type="button"
  //           class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
  //           data-carousel-prev
  //         >
  //           <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //             <svg
  //               class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 6 10"
  //             >
  //               <path
  //                 stroke="currentColor"
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="M5 1 1 5l4 4"
  //               />
  //             </svg>
  //             <span class="sr-only">Previous</span>
  //           </span>
  //         </button>
  //         <button
  //           type="button"
  //           class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
  //           data-carousel-next
  //         >
  //           <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  //             <svg
  //               class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
  //               aria-hidden="true"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 6 10"
  //             >
  //               <path
  //                 stroke="currentColor"
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="m1 9 4-4-4-4"
  //               />
  //             </svg>
  //             <span class="sr-only">Next</span>
  //           </span>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
