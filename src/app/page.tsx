"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react";
import { ImagesSlider } from "@/components/ui/image-slider";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Gallery {
  itinerary_id: string;
  gallery_id: number;
  gallery_alt_text: string | null;
  gallery_path: string;
  src: string;
  title: string;
}

interface RelatedVariant {
  itinerary_id: string;
  itinerary_variant_id: number;
  itinerary_variant_pub_price: string;
  itinerary_variant_disc_price: string;
  unit_name: string;
  related_unit: string | null;
}

interface Itinerary {
  itinerary_id: string;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: string;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: Gallery[];
  related_variant: RelatedVariant;
}

interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
}

function Home() {
  const [data, setData] = useState<Itinerary[]>([]);
  const [article, setArticle] = useState<Article[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://pandooin.com/api/zamrood/itinerary?highlight=true"
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getArticle = async () => {
    try {
      const response = await axios.get(
        "https://pandooin.com/api/zamrood/article"
      );
      setArticle(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    getArticle();
  }, []);
  console.log(data);
  console.log(article);

  return (
    <>
      <Navbar />
      <Header />
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-52 2xl:px-64">
        <section className="py-10 xl:py-20">
          <div className="text-center">
            <div className="font-fontone text-[50px] xl:text-[84px]">
              Beyond Premium
            </div>
            <div className="font-fonttwo font-bold text-[20px] xl:text-[32px] mt-0 xl:-mt-8">
              Elevate Your Experience
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8 mt-16">
            <div className="flex flex-col justify-center items-center text-center">
              <Image
                src="/Frame1.svg"
                alt="Zamrood by Pandooin"
                className="mx-auto w-[100px] xl:w-auto"
                width={156}
                height={156}
                priority
              />
              <div className="font-bold text-sm xl:text-xl text-[#0B7373]">
                PERSONAL ITINERARIES
              </div>
              <div className="w-full xl:w-5/6 mt-2 xl:mt-4">
                Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <Image
                src="/Frame2.svg"
                alt="Zamrood by Pandooin"
                className="mx-auto w-[100px] xl:w-auto"
                width={156}
                height={156}
                priority
              />
              <div className="font-bold text-xl text-[#0B7373]">
                PERSONAL ITINERARIES
              </div>
              <div className="w-full xl:w-5/6 mt-2 xl:mt-4">
                Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <Image
                src="/Frame3.svg"
                alt="Zamrood by Pandooin"
                className="mx-auto w-[100px] xl:w-auto"
                width={156}
                height={156}
                priority
              />
              <div className="font-bold text-xl text-[#0B7373]">
                PERSONAL ITINERARIES
              </div>
              <div className="w-full xl:w-5/6 mt-2 xl:mt-4">
                Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires.
              </div>
            </div>
          </div>
        </section>
        <section id="destinations" className="py-10 xl:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <Image
              src="/Frame4.svg"
              alt="Zamrood by Pandooin"
              className="mx-auto w-[200px] h-auto"
              width={350}
              height={316}
              priority
            />
            <div className="space-y-4 w-fit">
              <div className="font-bold font-fonttwo text-xl xl:text-4xl w-fit">
                Discover Tailored Experiences
              </div>
              <div className="w-full xl:w-3/5 font-normal xl:text-base">
                Create your own journey, personalized to suit your preferences
                and interests, ensuring a once-in-a-lifetime adventure awaits.
              </div>
              <div>
                <Link
                  href="https://pandooin.com/id/tailor-made/create?utm_source=zamrood&utm_medium=website&utm_campaign=premium"
                  className="py-2 px-4 xl:py-2.5 xl:px-6 rounded-full bg-black font-normal text-sm xl:text-base text-white w-fit hover:bg-[#D6B66B] transition duration-300"
                >
                  Customize Your Trip
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 xl:py-20">
          <Image
            src="/Separator.svg"
            alt="Separator"
            className="mx-auto"
            width={1000}
            height={100}
            priority
          />
        </section>
        <section className="py-10 xl:py-20">
          <div className="flex items-center gap-4">
            <div className="font-fonttwo text-xl xl:text-4xl font-bold">
              Destinations
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/ArrowRight.svg"
                alt="Zamrood by Pandooin"
                className="mx-auto w-[20px] h-auto xl:w-[45px] xl:h-[45px]"
                width={45}
                height={45}
                priority
              />
              <div>Explore More</div>
            </div>
          </div>
          {Array.isArray(data) &&
            data.map((item, index) =>
              index % 2 === 0 ? (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 py-8 xl:py-20 gap-4 xl:gap-8"
                >
                  {Array.isArray(item.related_galleries) && (
                    <ImagesSlider
                      images={item.related_galleries.map(
                        (gallery) => gallery.src
                      )}
                      className="order-1 lg:order-1 w-full h-[300px] lg:w-full lg:h-full"
                    />
                  )}
                  <div className="h-full flex flex-col justify-between order-2 lg:order-1">
                    <div className="space-y-2">
                      <div className="text-lg font-normal">
                        {item.itinerary_day} DAYS {item.itinerary_day - 1} NIGHT
                      </div>
                      <div className="text-xl xl:text-4xl font-fonttwo font-bold text-[#0B7373] w-4/5">
                        {item.itinerary_name}
                      </div>
                      <div className="font-bold text-lg">
                        Organized by {item.partner_name}
                      </div>
                      <div className="text-sm xl:text-lg">
                        {item.itinerary_short_description}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="text-lg">Start from</div>
                        <div className="font-medium text-lg text-[#B8B8B8] font-fonttwo">
                          IDR 9,999,999
                        </div>
                        <div className="text-lg xl:text-3xl font-fonttwo font-medium">
                          IDR {item.related_variant.itinerary_variant_pub_price}
                        </div>
                      </div>
                      <div className="rounded-full bg-white text-black py-1 px-2 xl:py3-3 xl:px-3 border-2 border-black text-sm xl:text-lg font-bold">
                        See Details
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 py-8 xl:py-20 gap-4 xl:gap-8">
                  {Array.isArray(item.related_galleries) && (
                    <ImagesSlider
                      images={item.related_galleries.map(
                        (gallery) => gallery.src
                      )}
                      className="order-1 lg:order-2 w-full h-[300px] lg:w-full lg:h-full"
                    />
                  )}
                  <div className="h-full flex flex-col justify-between order-2 lg:order-1">
                    <div className="space-y-2">
                      <div className="text-lg font-normal">
                        {item.itinerary_day} DAYS {item.itinerary_day - 1} NIGHT
                      </div>
                      <div className="text-4xl font-fonttwo font-bold text-[#0B7373] w-4/5">
                        {item.itinerary_name}
                      </div>
                      <div className="font-bold text-lg">
                        Organized by {item.partner_name}
                      </div>
                      <div className="text-lg">
                        {item.itinerary_short_description}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="text-lg">Start from</div>
                        <div className="font-medium text-lg text-[#B8B8B8] font-fonttwo">
                          IDR 9,999,999
                        </div>
                        <div className="text-3xl font-fonttwo font-medium">
                          IDR {item.related_variant.itinerary_variant_pub_price}
                        </div>
                      </div>
                      <div className="rounded-full bg-white text-black p-3 border-2 border-black text-lg font-bold">
                        See Details
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </section>
        <section className="py-10">
          <div className="flex items-center gap-4 xl:gap-8 w-full overflow-x-auto">
            <div className="flex flex-nowrap space-x-4 xl:space-x-8">
              {Array.isArray(data) &&
                data.map((item) => (
                  <div className="flex-shrink-0 w-[150px] xl:w-[300px] bg-white border rounded-lg shadow-lg flex flex-col h-[450px] xl:justify-between">
                    {Array.isArray(item.related_galleries) && (
                      <ImagesSlider
                        images={item.related_galleries.map(
                          (gallery) => gallery.src
                        )}
                        className="w-full h-[120px] xl:h-[200px] object-cover rounded-t-lg"
                      />
                    )}
                    <div className="p-4">
                      <div className="text-xs xl:text-lg font-normal">
                        {item.itinerary_day} DAYS {item.itinerary_day - 1} NIGHT
                      </div>
                      <div className="text-xs xl:text-lg font-fonttwo font-bold text-[#0B7373]">
                        {item.itinerary_name}
                      </div>
                      <div className="font-bold text-sm xl:text-lg">
                        Organized by {item.partner_name}
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <div className="text-xs">Start from</div>
                      <div className="tech-xs xl:text-lg font-normal xl:font-medium font-fonttwo">
                        IDR {item.related_variant.itinerary_variant_pub_price}
                      </div>
                      <div className="w-fit text-xs bg-transparent py-1 px-4 rounded-full border-2 border-black">
                        See Details
                      </div>
                    </div>
                  </div>
                ))}
              {Array.isArray(data) &&
                data.map((item) => (
                  <div className="flex-shrink-0 w-[150px] xl:w-[300px] bg-white border rounded-lg shadow-lg flex flex-col h-[450px] xl:justify-between">
                    {Array.isArray(item.related_galleries) && (
                      <ImagesSlider
                        images={item.related_galleries.map(
                          (gallery) => gallery.src
                        )}
                        className="w-full h-[120px] xl:h-[200px] object-cover rounded-t-lg"
                      />
                    )}
                    <div className="p-4">
                      <div className="text-xs xl:text-lg font-normal">
                        {item.itinerary_day} DAYS {item.itinerary_day - 1} NIGHT
                      </div>
                      <div className="text-xs xl:text-lg font-fonttwo font-bold text-[#0B7373]">
                        {item.itinerary_name}
                      </div>
                      <div className="font-bold text-sm xl:text-lg">
                        Organized by {item.partner_name}
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <div className="text-xs">Start from</div>
                      <div className="tech-xs xl:text-lg font-normal xl:font-medium font-fonttwo">
                        IDR {item.related_variant.itinerary_variant_pub_price}
                      </div>
                      <div className="w-fit text-xs bg-transparent py-1 px-4 rounded-full border-2 border-black">
                        See Details
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex items-center justify-end pt-8 gap-8">
            <Image
              src="/ArrowRight.svg"
              alt="Zamrood by Pandooin"
              className=""
              width={45}
              height={45}
              priority
            />
            <div>Explore More</div>
          </div>
        </section>
      </main>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-52 2xl:px-64 py-10 xl:py-20 bg-[#D6B66B] w-screen">
        <div className="text-base font-fontone text-[#004040] text-[50px] xl:text-[70px]">
          Luxury Footages
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index}>
                {Array.isArray(item.related_galleries) && (
                  <ImagesSlider
                    images={item.related_galleries.map(
                      (gallery) => gallery.src
                    )}
                    className="w-full h-[200px] xl:w-[400px] xl:h-[400px]"
                  />
                )}
              </div>
            ))}
        </div>
        <section className="py-10">
          <Image
            src="/SeparatorWhite.svg"
            alt="Separator"
            className="mx-auto"
            width={1000}
            height={100}
            priority
          />
        </section>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index}>
                {Array.isArray(item.related_galleries) && (
                  <ImagesSlider
                    images={item.related_galleries.map(
                      (gallery) => gallery.src
                    )}
                    className="w-full h-[200px] xl:w-[400px] xl:h-[400px]"
                  />
                )}
              </div>
            ))}
        </div>
      </section>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-52 2xl:px-64 pt-14">
        <div className="relative p-6 flex flex-col xl:flex-row xl:justify-between items-center bg-center bg-cover bg-[url('/bg2.jpg')]">
          <div className="absolute inset-0 bg-black/60"></div>
          <Image
            src="/Logo.svg"
            alt="Zamrood by Pandooin"
            className="text-white relative z-10"
            width={179}
            height={67}
            priority
          />
          <div className="flex flex-col justify-end items-end gap-3 text-white relative z-10">
            <div className="text-sm xl:text-base mt-4 xl:mt-0">
              Want to see other destinations? Check us out at our website
            </div>
            <Link
              href={"https://pandooin.com"}
              className=" text-sm xl:text-xl font-bold"
            >
              pandooin.com
            </Link>
          </div>
        </div>
      </section>
      <section
        id="article"
        className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-52 2xl:px-64 py-10 xl:py-20 space-y-2"
      >
        <div className="text-xl xl:text-4xl font-fonttwo font-bold text-[#0B7373]">
          Articles
        </div>
        <div className="text-sm xl:text-xl text-[#0B7373]">
          Our curated writings, offering something for every reader.
        </div>
        <div className="grid grid-cols-1 xl:grid-rows-2 xl:grid-flow-col xl:gap-10 gap-4">
          {Array.isArray(article) &&
            article.map((item, index) =>
              index === 0 ? (
                <div className="row-span-2 w-full h-[690px]">
                  <Image
                    src={item.featured_image}
                    alt="Zamrood by Pandooin"
                    className="h-full w-full xl:w-[536px]"
                    width={540}
                    height={719}
                    priority
                  />
                  <div className="bg-[#0B7373] flex justify-center p-2 text-white">
                    {item.title}
                  </div>
                </div>
              ) : (
                <div className="col-span-1 row-span-1 h-auto xl:h-[340px]">
                  <Image
                    src={item.featured_image}
                    alt="Zamrood by Pandooin"
                    className="w-full h-[300px]"
                    width={256}
                    height={347}
                    priority
                  />
                  <div className="bg-[#0B7373] flex justify-center p-2 text-white h-[75px]">
                    {item.title}
                  </div>
                </div>
              )
            )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
