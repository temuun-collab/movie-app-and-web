export const HeaderGenreDropdown = (props) => {
  return (
    <div className="flex gap-[12px]">
      <button className="w-[97px] h-[36px] rounded-md border-1 g-[8px] bg-white flex gap-[8px] justify-center items-center">
        <img className="w-[8px] h-[4px]" src="./logo1.png" />
        <button className="w-[41px] h-[20px] text-[14px] text-black">
          Genre
        </button>
      </button>
      <div
        className="w-[379px] h-[36px] flex gap-[10px] rounded-md border-1 border-gray-200  items-center"
        style={{ paddingLeft: "5px" }}
      >
        <img src="./logo2.png" className="w-[16px] h-[16px] " />
        <input
          className="w-[350px] h-[36px] g-[10px] text-black"
          placeholder="Search.."
        />
      </div>
    </div>
  );
};
