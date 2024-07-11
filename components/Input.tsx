type InputProps = {
  onChange: (newValue: string) => void;
};

export const Input = ({ onChange }: InputProps) => {
  return (
    <input
      type="text"
      className="p-4 text-black"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
