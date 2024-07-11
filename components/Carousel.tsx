import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";

export interface CarouselProps {
  items: CarouselItemProps[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <ResponsiveCarousel
      autoPlay
      infiniteLoop
      interval={7000}
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler) => (
        <button
          type="button"
          onClick={onClickHandler}
          className="absolute flex items-center justify-center z-10 bottom-10 w-8 h-8 cursor-pointer bg-white opacity-60 hover:opacity-100 text-gray-800 rounded-tl-full rounded-bl-full right-18"
        >
          <ChevronLeftIcon />
        </button>
      )}
      renderArrowNext={(onClickHandler) => (
        <button
          type="button"
          onClick={onClickHandler}
          className="absolute flex items-center justify-center z-10 bottom-10 w-8 h-8 cursor-pointer bg-white opacity-60 hover:opacity-100 text-gray-800 rounded-br-full rounded-tr-full right-10"
        >
          <ChevronRightIcon />
        </button>
      )}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className="bg-black w-12 h-1 inline-block mx-2"
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className="bg-white w-12 h-1 inline-block mx-2"
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {items.map((item, index) => {
        return (
          <CarouselItem
            key={index}
            image={item.image}
            description={item.description}
            url={item.url}
            title={item.title}
          />
        );
      })}
    </ResponsiveCarousel>
  );
};
