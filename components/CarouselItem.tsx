import React from "react";

export interface CarouselItemProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  title,
  description,
  url,
}) => {
  return (
    <div>
      <img src={image} />
      <div className="absolute w-full bottom-20 flex items-center flex-col">
        <div className="mb-2 text-sm leading-5 uppercase font-bold">
          {description}
        </div>
        <div className=" text-5xl leading-tight font-black">{title}</div>
        <a
          className="block w-fit mt-7 bg-white font-bold text-black px-10 py-4 text-sm cursor-pointer"
          href={url}
        >
          Descoperă acum
        </a>
      </div>
    </div>
  );
};
