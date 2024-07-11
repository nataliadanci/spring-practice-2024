type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-white text-black p-4 rounded-lg hover:opacity-80"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
