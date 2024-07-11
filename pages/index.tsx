import React, { useRef } from "react";
import { useState } from "react";
import { Search } from "@/components/Search";
import { GreyHeaderButton } from "@/components/GreyHeaderButton";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Icons } from "@/components/Icons";
import { GenderMenu } from "@/components/GenderMenu";
import { BlogCard } from "@/components/BlogCard";
import { Categories } from "@/components/CategoryPopover";
import { Carousel } from "@/components/Carousel";
import { CarouselItemProps } from "@/components/CarouselItem";
import { TabsComponent } from "@/components/TabsComponent";
import { SectionCard } from "@/components/SectionCard";
import DialogDemo from "@/components/Dialog";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const carouselSlides: CarouselItemProps[] = [
    {
      image:
        "https://cdn.aboutstatic.com/file/ef41ce89297a726f44e1b4a8a1733760.jpeg?quality=75&height=1000&width=2000",
      title: "MYLAVIE",
      description: "Exploreaza colectia",
      url: "https://www.aboutyou.ro/s/mylavie-106467",
    },
    {
      image:
        "https://cdn.aboutstatic.com/file/6aa735910b5143bb0e4fc603a9d8b47c.jpg?quality=75&height=1000&width=2000",
      title: "Top 3 tendințe de primăvară",
      description: "De cumpărat acum",
      url: "https://www.aboutyou.ro/s/top-3-tendinte-de-primavara-105867",
    },
    {
      image:
        "https://cdn.aboutstatic.com/file/12910d8996641a2ff6c5a3eb228ac644.jpeg?quality=75&height=1000&width=2000",
      title: "Punem la bătaie experiența visurilor tale",
      description: "Cumpără și participă",
      url: "https://www.aboutyou.ro/s/punem-la-bataie-experienta-visurilor-tale-106307",
    },
    {
      image:
        "https://cdn.aboutstatic.com/file/a6de6480a323f09bcd9ae19d0436adb1.jpeg?quality=75&height=1000&width=2000",
      title: "Rochii elegante de cocktail",
      description: "Pentru invitații la nuntă",
      url: "https://www.aboutyou.ro/s/rochii-elegante-de-cocktail-105959",
    },
    {
      image:
        "https://cdn.aboutstatic.com/file/e1ea2b69b942e9505866c74b1b0bf0d5.jpg?quality=75&height=1000&width=2000",
      title: "Piese cheie, pe care ți le dorești primăvara aceasta",
      description: "Cele mai tari piese ale sezonului",
      url: "https://www.aboutyou.ro/s/piese-cheie-pe-care-ti-le-dore-ti-primavara-aceasta-105866",
    },
  ];

  return (
    <div className={`min-h-screen flex-col bg-white text-black px-10`}>
      <div className="mt-1 ml-1">
        <GreyHeaderButton
          icon={<QuestionMarkCircledIcon className="w-4 h-4" />}
          text="Contact & ajutor"
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <GenderMenu />
        </div>
        <Icons />
      </div>
      <Categories>
        <div className="search-bar-container">
          <Search onChange={setValue} />
        </div>
      </Categories>

      <div className="mt-4">
        <Carousel items={carouselSlides} />
      </div>

      <SectionCard
        backgroundColor="bg-[#a1fdDC]"
        buttonLabel="Try it now"
        buttonUrl="https://www.aboutyou.ro/"
        imageUrl="https://cdn.aboutstatic.com/file/12910d8996641a2ff6c5a3eb228ac644.jpeg?quality=75&height=1000&width=2000"
        subtitle="For the fashion"
        title="New Armani Drop"
      />

      <div className="flex justify-center w-full">
        <div className="w-4/12">
          <BlogCard
            image="https://cdn.aboutstatic.com/file/a97b58b7c65bc5720c4781e777e02213.jpeg"
            subTitle="SUMMER IN DENIM"
            title="Levi’s®"
            url="https://www.aboutyou.ro/s/levis-106460"
          />
        </div>
        <div className="w-4/12">
          <BlogCard
            image="https://cdn.aboutstatic.com/file/a97b58b7c65bc5720c4781e777e02213.jpeg"
            subTitle="SUMMER IN DENIM"
            title="Levi’s®"
            url="https://www.aboutyou.ro/s/levis-106460"
          />
        </div>
        <div className="w-4/12">
          <BlogCard
            image="https://cdn.aboutstatic.com/file/a97b58b7c65bc5720c4781e777e02213.jpeg"
            subTitle="SUMMER IN DENIM"
            title="Levi’s®"
            url="https://www.aboutyou.ro/s/levis-106460"
          />
        </div>
      </div>
    </div>
  );
}
