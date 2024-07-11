import { Icons } from "./Icons";
import { GenderMenu } from "./GenderMenu";

export const TitleHeader = () => {
  return (
    <div className="border-b border-slate-300 w-full">
      <header
        className={`bg-white flex items-center justify-between w-full h-18 border-b-[1px] border-solid border-slate-300 `}
      >
        <div className="inline-flex items-center ml-10 overflow-auto">
          <GenderMenu />
        </div>
        <div className="overflow-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuZK6dWS-AsvN3Eii7LXIyfpb6g4PBWyWzD-50ljhew&s"
            alt="Logo companie"
            className="w-38 h-16"
          />
        </div>
        <div className="inline-flex items-center overflow-auto">
          <Icons />
        </div>
      </header>
    </div>
  );
};
