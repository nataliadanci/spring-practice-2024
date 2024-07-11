type CategoryProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isSale?: boolean;
};

export const Category = ({
  onClick,
  children,
  isSale = false,
}: CategoryProps) => {
  return (
    <button
      className={`text-black bg-white h-8 mx-2 mr-3 hover:bg-gray-200 px-2 font-sans rounded-sm font-semibold relative flex items-center 
        ${isSale && "text-red-500"}`}
      onClick={onClick}
    >
      <div className="mr-1">{children}</div>
      {isSale && (
        <div className="flex items-center">
          <img
            src="https://cdn4.iconfinder.com/data/icons/graph-3/100/graph_graph_chart-37-512.png"
            alt="Discount"
            className="w-4 h-4"
          />
        </div>
      )}
    </button>
  );
};
