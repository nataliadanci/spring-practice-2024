import Image from "next/image";

type CardProps = {
  subtitle: string;
  title: string;
  buttonLabel: string;
  buttonUrl: string;
  imageUrl: string;
  backgroundColor: string;
};

export const SectionCard = ({
  subtitle,
  title,
  buttonLabel,
  buttonUrl,
  imageUrl,
  backgroundColor,
}: CardProps) => {
  return (
<div className="w-full p-[23px] md:px-[40px]">
  <div className={`${backgroundColor} shadow-md overflow-hidden text-white h-screen flex flex-col md:flex-row items-center `}>
    <div className="w-1/2 pl-6 md:px-28 pt-3 md:pt-0 justify-center flex-col flex align-middle">
      <h3 className="text-base md:text-base leading-[1.15] font-bold text-left">{subtitle}</h3>
      <h2 className="text-4.5 leading-[1.15] font-bold mb-8 text-left">{title}</h2>
      <a href={buttonUrl} className="bg-white text-black bt-4 py-2 px-3 h-14 w-64 md:px-5 hover:bg-gray-200 text-16 inline-flex items-center justify-center text-center">
        {buttonLabel}
      </a>
    </div>
    <div className="w-full md:w-1/2 md:flex-1 h-full">
      <Image
        src={imageUrl}
        alt="Image"
        className="w-full object-cover h-full" 
        width={3376}
        height={4220}
      />
    </div>
  </div>
</div>


  );
};
