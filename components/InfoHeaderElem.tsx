type InfoHeaderElemProps = {
  onClick?: () => void;
  text: string;
  icons: React.ReactNode;
  bgColor: string;
  textColor: string;
};

export const InfoHeaderElem = ({
  text,
  onClick,
  icons,
  bgColor,
  textColor,
}: InfoHeaderElemProps) => {
  return (
    <button
      className={`bg-${bgColor} ${
        textColor === "black" ? "text-black" : "text-white"
      } flex flex-row items-center gap-1 p-1`}
      onClick={onClick}
    >
      {icons}
      <span className="text-xs ">{text}</span>
    </button>
  );
};
