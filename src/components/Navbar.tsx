"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, []);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 sm:px-8 md:px-16 lg:px-24 xl:px-52 2xl:px-64 py-8 bg-transparent z-10 bg-white text-black">
        <Link href="/">
          <Image
            src="/LogoBlack.svg"
            alt="Zamrood by Pandooin"
            className="text-black w-[100px] h-[45px] lg:w-[179px] lg:h-[67px]"
            width={179}
            height={67}
            priority
          />
        </Link>
        <div className="flex items-center lg:gap-4 2xl:gap-6 text-base text-black ml-[130px]">
          <div className="hidden sm:hidden lg:flex">
            <Link
              href="/"
              className="text-xs lg:text-sm 2xl:text-lg py-2.5 px-6 border-b-2 font-semibold border-[#0B7373] text-[#0B7373]"
            >
              Homepage
            </Link>
            <Link
              href="#destinations"
              className="text-xs lg:text-sm 2xl:text-lg py-2.5 px-6 font-semibold text-[#0B7373]"
            >
              Customize Your Trip
            </Link>
            <Link
              href="/destinations"
              className="text-xs lg:text-sm 2xl:text-lg p-2.5 font-semibold text-[#0B7373]"
            >
              Destination
            </Link>
            <Link
              href="#article"
              className="text-xs lg:text-sm 2xl:text-lg p-2.5 font-semibold text-[#0B7373]"
            >
              Article
            </Link>
            <Link
              href="/"
              className="text-xs lg:text-sm 2xl:text-lg bg-transparent border-2 border-white rounded-full py-2.5 px-6 font-semibold hover:bg-[#0B7373] hover:text-white text-[#0B7373] transition duration-300"
            >
              Need Assistance?
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`flex lg:hidden items-center justify-end bg-slate-100rounded-md`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                ref={checkboxRef}
                name="hamburger"
                id="hamburger"
                className="sr-only peer"
                hidden
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 py-3 px-2 sm:py-4 sm:px-3  rounded-full cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300 rotate"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>
              <div className="flex flex-col justify-between overflow-y-auto peer-checked:translate-x-0 z-20 fixed inset-0 w-[270px] translate-x-[-100%] bg-white border-r shadow-xl transition duration-500 lg:border-l-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div>
                  <Link href="/">
                    <Image
                      src="/LogoBlack.svg"
                      alt="Zamrood by Pandooin"
                      className="text-black w-[100px] h-[45px] lg:w-[179px] lg:h-[67px]"
                      width={179}
                      height={67}
                      priority
                    />
                  </Link>
                  <div className="mt-10 flex flex-col space-y-1">
                    <Link
                      href="/"
                      className="text-xs lg:text-sm 2xl:text-lg py-2.5 px-6 border-b-2 font-semibold border-[#0B7373] text-[#0B7373]"
                    >
                      Homepage
                    </Link>
                    <Link
                      href="#destinations"
                      className="text-xs lg:text-sm 2xl:text-lg py-2.5 px-6 font-semibold text-[#0B7373]"
                    >
                      Customize Your Trip
                    </Link>
                    <Link
                      href="/destinations"
                      className="text-xs lg:text-sm 2xl:text-lg p-2.5 font-semibold text-[#0B7373]"
                    >
                      Destination
                    </Link>
                    <Link
                      href="#article"
                      className="text-xs lg:text-sm 2xl:text-lg p-2.5 font-semibold text-[#0B7373]"
                    >
                      Article
                    </Link>
                    <Link
                      href="/"
                      className="text-xs lg:text-sm 2xl:text-lg bg-transparent border-2 border-white rounded-full py-2.5 px-6 font-semibold hover:bg-[#0B7373] hover:text-white text-[#0B7373] transition duration-300"
                    >
                      Need Assistance?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
