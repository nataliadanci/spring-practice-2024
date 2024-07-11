import { useState } from 'react';

type ProductImages = {
  alt: string;
  src: string;
}

type ProductColor = {
  colorCode: string;
  colorName: string;
  urlToProduct: string;
}


type ProductCardProps = {
  images: ProductImages[];
  title: string;
  price: number;
  isPacket?: boolean;
  isPremium?: boolean;
  sizes: string[];
  colors: ProductColor[];
  bestPrice?: string;
  isFavorite?: boolean;
  discount?: number;
};

const ProductCard = ({
  images,
  title,
  price,
  isPacket,
  isPremium,
  sizes,
  colors,
  bestPrice,
  isFavorite,
  discount,
}: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavHovered, setIsFavHovered] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(isFavorite);
  const [clickedLeft, setClickedLeft] = useState(false);
  const [clickedRight, setClickedRight] = useState(false);

  const handleFavClick = () => {
    setIsFavClicked(!isFavClicked);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setClickedLeft(true);
    setClickedLeft(true);
    setTimeout(() => {
      setClickedLeft(false);
    }, 500);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setClickedRight(true);
    setClickedRight(true);
    setTimeout(() => {
      setClickedRight(false);
    }, 500);

  };

  return (
    <div className="bg-white rounded-lg  hover:border-grey w-72 h-[488px] p-2 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative w-72">
        {images.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4">
            {currentImage !== 0 && (
              <button
                onClick={handlePrevImage}
                className={`text-black text-bold ${clickedLeft ? 'bg-gray-100' : 'bg-white'} hover:bg-white py-2 px-3 rounded-r-full absolute left-0 transition-transform duration-300 transform ${hovered ? 'translate-x-0 opacity-100' : '-translate-x-1/2 opacity-0'}`}
              >
                &lt;
              </button>
            )}
            {currentImage !== images.length - 1 && (
              <button
                onClick={handleNextImage}
                className={`text-black text-bold ${clickedRight ? 'bg-gray-100' : 'bg-white'} hover:bg-white py-2 px-3 rounded-l-full absolute right-0 transition-transform duration-300 transform ${hovered ? 'translate-x-0 opacity-100' : 'translate-x-1/2 opacity-0'}`}
              >
                &gt;
              </button>
            )}
          
          </div>
        )}

<img 
  src={images[currentImage].src} 
  alt={images[currentImage].alt} 
  className="w-full h-96 transition-transform duration-500 rounded-md object-cover"
/>


        <span className="absolute top-2 right-2">
          <svg
            className={`h-6 w-6 cursor-pointer transform transition-transform ${isFavHovered ? 'scale-125' : 'scale-75'} ${isFavHovered ? 'heart-animation' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavClicked ? '#f21c0c' : 'none'}
            stroke={isFavClicked ? 'none' : '#D1D5DB'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleFavClick}
            onMouseEnter={() => setIsFavHovered(true)}
            onMouseLeave={() => setIsFavHovered(false)}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
    



        <div className={`absolute bottom-0 left-0 transition-all duration-500 pb-2 ${hovered ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'}`}>
          
          <div className="grid gap-1 justify-start">
            {isPacket && (
              <span className="text-xxs text-black bg-white w-fit inline-block px-2 py-1 rounded-r-sm">
                <span className="ml-1">Pachet de 3 piese</span>
              </span>
            )}
            {isPremium && (
              <span className="text-xxs text-black bg-white w-fit inline-block px-2 py-1 rounded-r-sm">
                <span className="ml-1">Premium</span>
              </span>
            )}
            {discount && (
              <span className="text-xxs text-white indent-1 w-fit bg-red-500 inline-block px-2 py-1 rounded-r-sm">
                -{discount}%
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={`bg-white absolute bottom-7 w-full transition-all -translate-y-0.5  ${hovered ? 'h-32' : 'h-12'}`} style={{ transitionDuration: hovered ? '0.4s' : '0.3s' }}>
        <span className={`absolute left-1/2 rounded-full transform bg-gray-200 p-1 -translate-x-1/2 -mt-8 flex items-center ${hovered ? 'opacity-70' : 'opacity-0'}`}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full bg-gray-400 mx-1 ${index === currentImage ? 'bg-gray-800' : 'bg-gray-200'}`}
                  />
                ))}
        </span>
        
        <h2 className="text-sm transform-none font-semibold mb-2">{title}</h2>
        <div className="flex transform-none items-center   mb-2">
          {discount ? (
            <div>
              <span className="font-bold text-red-500 mr-2">{((price * (100 - discount)) / 100).toFixed(2)} lei</span>
              <span className="text-gray-400 line-through ">{price} lei</span>
            </div>
          ) : (
            <span className="font-bold text-blue-500">{price}</span>
          )}
        </div>
        <div className={`flex flex-col mb-2 transition-all duration-100 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center mb-2">
            <span className="text-gray-700 mr-2">Sizes:</span>
            <span className="text-sm">{sizes.join(", ")}</span>
          </div>
          <div className="flex">
            {colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full mr-2 border border-gray-300"
              style={{ backgroundColor: color.colorCode }}
            />
            ))}
          </div>
          <button className={`mt-2 bg-black w-56 hover:drop-shadow-md hover:-translate-y-0.5 text-white py-2 px-4 rounded-md transition-all duration-0 ${hovered ? 'opacity-100 duration-1000' : 'opacity-0 duration-100'}`}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
