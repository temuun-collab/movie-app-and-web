export const LoadingMovieList = (props) => {
  return (
    <div
      className="w-[100vw] flex flex-col gap-[30px] items-center"
      style={{ paddingTop: "40px" }}
    >
      <div className="flex justify-between w-[1277px] h-[36px]">
        <button className="w-[250px] h-[32px] bg-[#F4F4F5] rounded-full"></button>
        <button className="w-[165px] h-[36px] bg-[#F4F4F5] rounded-full"></button>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex w-[1277px] gap-[30px] ">
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
        </div>
        <div className="flex w-[1277px] gap-[30px] ">
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[229px] h-[439px] bg-[#F4F4F5]"></div>
        </div>
      </div>
    </div>
  );
};
