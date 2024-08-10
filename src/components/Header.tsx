"use client";

function Header() {
  return (
    <>
      <header className="bg-[url('/bg.jpg')] bg-cover bg-center h-[500px] xl:h-[810px]">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-52 2xl:mx-64 pt-[200px]">
          <div className="">
            <div className="text-[#D6B66B] font-fontone text-[70px] xl:text-[128px]">
              Premium Travel
            </div>
            <div className="font-bold font-fonttwo -mt-10 xl:-mt-20 text-white text-[30px] xl:text-[54px]">
              Beyond Expectation
            </div>
          </div>
          <div className="text-white font-normal space-y-4">
            <div className=" w-full xl:w-3/5 text-lg xl:text-2xl">
              Experience the finest that Indonesia has to offer with our curated
              selection of premium trips, ensuring comfort every step of the way
            </div>
            <div className="font-base rounded-full text-xs xl:text-base py-2 px-4 xl:py-2.5 xl:px-6 border-2 bg-transparent border-white w-fit hover:bg-[#D6B66B] transition duration-300">
              Take me There
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
