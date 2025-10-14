export const LoadingMovieMore = () => {
  return (
    <div className="w-[100vw] h-[100vw] flex justify-center items-center max-sm:w-[430px] ">
      <div className="w-[100vw] flex flex-col gap-[10px] items-center h-[100vh] bg-white max-sm:w-[400px] max-sm:h-[1550px]">
        <div className="flex justify-between w-[1080px] h-[72px] max-sm:flex-row">
          <div className="flex flex-col gap-2 ">
            <button className="w-[211px] h-[40px] bg-[#F4F4F5] rounded-full max-sm:w-[144px] max-sm:h-[30px]"></button>
            <button className="w-[237px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full max-sm:hidden"></button>
            <button className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full   max-sm:w-[81px] max-sm:h-[48px]"></button>
          </div>
        </div>
        <div className="w-[1080px] h-[428px] flex gap-5 max-sm:w-[400px] max-sm:h-0">
          <div className="w-[290px] h-[439px] bg-[#F4F4F5]   max-sm:w-[375px] max-sm:h-[211px]"></div>
          <div className="w-[760px] h-[439px] bg-[#F4F4F5] max-sm:hidden"></div>
        </div>
        <div className="flex w-[1080px] h-[271px] gap-5 flex-col mt-5 max-sm:w-[375px]">
          <div className="flex h-[40px] flex-col gap-5 max-sm:flex-row">
            <button className="w-[1080px] h-[22px] bg-[#F4F4F5] rounded-full max-sm:w-[100px] max-sm:h-[130px]"></button>
            <button className="w-[699px] h-[22px] bg-[#F4F4F5] rounded-full max-sm:w-[201px] max-sm:h-[20px]"></button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-7">
              <button className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full max-sm:w-[64px] max-sm:h-[20px]"></button>
              <button className="w-[137px] h-[28px] bg-[#F4F4F5] rounded-full max-sm:w-[134px] max-sm:h-[20px]"></button>
            </div>
            <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 gap-5" />
            <div className="flex gap-7">
              <button className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full max-sm:w-[64px] max-sm:h-[20px]"></button>
              <button className="w-[360px] h-[28px] bg-[#F4F4F5] rounded-full max-sm:w-[134px] max-sm:h-[20px]"></button>
            </div>
            <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 gap-5" />
            <div className="flex gap-7">
              <button className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full max-sm:w-[64px] max-sm:h-[20px]"></button>
              <button className="w-[360px] h-[28px] bg-[#F4F4F5] rounded-full max-sm:w-[134px] max-sm:h-[20px]"></button>
            </div>
            <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 gap-5" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <button className="w-[250px] h-[32px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[165px] h-[36px] bg-[#F4F4F5] rounded-full"></button>
            </div>
            <div className="grid gap-5 max-sm:grid max-sm:grid-cols-2">
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-md"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
