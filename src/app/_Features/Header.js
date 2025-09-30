import { HeaderGenreDropdown } from "./HeaderGenreDropdown";
export const Header = (props) => {
  return (
    <div className="w-[100vw] justify-center flex max-sm:w-32">
      <div className="flex justify-center h-[59px] items-center w-[1440px] max-sm:w-32">
        <div className="flex justify-between h-[36px] w-[1280px] items-center max-sm:w-32 max-sm:flex max-sm:justify-between">
          <div className="flex gap-[8px] w-[90px] h-[20px]  max-sm:w-[300px] max-sm:h-[20px]">
            <img className="w-20px h-20px " src="/logo.png" />
            <h1 className="text-indigo-700 text-[16px] font-inter">Movie Z</h1>
          </div>
          <HeaderGenreDropdown />
          <button className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-1 max-sm: none">
            <img className="w-[12px] h-[12px]" src="/logo3.png" />
          </button>
        </div>
      </div>
    </div>
  );
};
