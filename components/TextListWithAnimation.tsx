import React, { useState } from "react";

type TextLink = {
  text?: string;
  link: string;
  image?: string;
};

type TextListWithAnimationProps = {
  subtitle: string;
  textLinks: TextLink[];
};

export const TextListWithAnimation: React.FC<TextListWithAnimationProps> = ({
  subtitle,
  textLinks,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hasImages = textLinks.some((link) => link.image);
  const hasText = textLinks.some((link) => link.text);

  return (
    <div className="mx-4">
      <h2 className="flex items-center justify-start text-[#9b9b9b] text-[.625rem] font-black uppercase tracking-[.5px] min-h-[36px] my-3">
        {subtitle}
      </h2>
      <div
        className={`grid  ${
          hasText && textLinks.length > 20
            ? "grid-cols-3"
            : hasImages && textLinks.length > 4
            ? "grid-cols-2 grid-rows-2 "
            : hasText && textLinks.length > 8
            ? "grid-cols-2 grid-rows-2 gap-x-4"
            : "grid-cols-1 grid-rows-auto"
        } gap-2`}
      >
        {textLinks.map((textLink, index) => (
          <div
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {textLink.image ? (
              <div className="relative flex">
                <img
                  className="max-h-[58px] w-28 my-1 bg-gray-200 object-scale-down py-4 "
                  src={textLink.image}
                  alt=""
                />
                {hoveredIndex === index && (
                  <div className="absolute w-28 max-h-[58px] my-1 inset-0 cursor-pointer flex items-center justify-center text-center text-xs bg-gray-200 text-gray-600 font-medium">
                    {textLink.text}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={textLink.link}
                className="relative flex items-center text-sm h-5"
              >
                {textLink.text}
                {hoveredIndex === index ? (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform -translate-y-1/2 mt-3 ml-2 transition-all duration-300 ease-in-out"
                  >
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <div className="w-[10px] h-[10px] mt-3 ml-2 bg-transparent" />
                )}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
