import { Inter } from "next/font/google";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Search } from "@/components/Search";
import { GreyHeaderButton } from "@/components/GreyHeaderButton";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";
import { Icons } from "@/components/Icons";
import { GenderMenu } from "@/components/GenderMenu";
import { InfoHeaderElem } from "@/components/InfoHeaderElem";
import { InfoHeader } from "@/components/InfoHeader";
import { InfoFooter } from "@/components/InfoFooter";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { SectionCard } from "@/components/SectionCard";
import { GrayHeader } from "@/components/GrayHeader";
import { TitleHeader } from "@/components/TitleHeader";
import { ButtonComponent } from "@/components/ButttonComponent";
import { Category } from "@/components/Category";
import * as Popover from "@radix-ui/react-popover";
import { Categories } from "@/components/CategoryPopover";
import { Carousel } from "@/components/Carousel";
import { CarouselItemProps } from "@/components/CarouselItem";
import { RadioGroup } from "@radix-ui/react-radio-group";
import RadioGroupDemo from "@/components/RadioGroupDemo";
import CheckboxDemo from "@/components/CheckBoxDemo";

const inter = Inter({ subsets: ["latin"] });

export default function InputPage() {
  const [value, setValue] = useState("");

  const product = {
    images: [
      { src: "/vans1.jpg", alt: "Vans 1" },
      { src: "/vans2.jpg", alt: "Vans 2" },
    ],
    title: "Vans Old School",
    price: 319.99,
    isPacket: true,
    isPremium: true,
    sizes: ["39", "40", "41", "44"],
    colors: [
      {
        colorCode: "#abcdef",
        colorName: "gray",
        urlToProduct: "www.route-to-another-product.com",
      },
      {
        colorCode: "#000000",
        colorName: "black",
        urlToProduct: "www.route-to-another-product.com",
      },
    ],
    bestPrice: "Best price in 30 days",
    isFavorite: false,
    discount: 15,
  };

  return (
    <main className={`flex min-h-screen flex-col bg-white  justify-between`}>
      <Layout>
        <ProductCard {...product} />
      </Layout>
    </main>
  );
}
