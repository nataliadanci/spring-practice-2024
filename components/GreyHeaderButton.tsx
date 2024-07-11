export interface GreyHeaderButtonProps {
  text: string;
  icon?: React.ReactNode;
  buttonClassName?: string;
}

export const GreyHeaderButton: React.FC<GreyHeaderButtonProps> = ({
  text,
  icon,
  buttonClassName,
}) => {
  return (
    <button className="bg-gray-200 px-2.5 h-6 text-light-gray  font-sans hover:opacity-80 flex flex-row items-center gap-1 font-medium ">
      {icon ? icon : null}
      <text className="text-xxs">{text}</text>
    </button>
  );
};
