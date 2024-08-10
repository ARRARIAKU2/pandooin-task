"use client";
import Image from "next/image";
function Footer() {
  return (
    <>
      <footer className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-52 2xl:px-64 py-7 grid xl:flex items-center xl:justify-between justify-center bg-[#004040]">
        <div className="text-white">
          © 2023 Zamrood by PT Teknologi Pandu Wisata
        </div>
        <Image
          src="/SosialMedia.svg"
          alt="Zamrood by Pandooin"
          className="text-white mt-10 xl:mt-0"
          width={150}
          height={48}
        />
      </footer>
    </>
  );
}

export default Footer;
