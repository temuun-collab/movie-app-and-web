export const LoadingMovieMore = (props) => {
  return (
    <div className="w-[100vw] h-[100vw] flex justify-center items-center">
      <div className="w-[100vw] flex flex-col gap-[10px] items-center h-[100vh] bg-white">
        <div className="flex justify-between w-[1080px] h-[72px]">
          <div className="flex flex-col gap-2">
            <button className="w-[211px] h-[40px] bg-[#F4F4F5] rounded-full"></button>
            <button className="w-[237px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full"></button>
            <button className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full"></button>
          </div>
        </div>
        <div className="w-[1080px] h-[428px] flex gap-5">
          <div className="w-[290px] h-[439px] bg-[#F4F4F5]"></div>
          <div className="w-[760px] h-[439px] bg-[#F4F4F5]"></div>
        </div>
        <div className="flex w-[1080px] h-[271px]">
          <div className="flex w-[423px] h-[20px]">
            <button className="w-[77px] h-[20px] bg-[#F4F4F5] rounded-full"></button>
            <button className="w-[77px] h-[20px] bg-[#F4F4F5] rounded-full"></button>
            <button className="w-[77px] h-[20px] bg-[#F4F4F5] rounded-full"></button>
          </div>
          <div className="flex h-[40px] flex-col">
            <button className="w-[1080px] h-[22px] bg-[#F4F4F5] rounded-full"></button>
            <button className="w-[699px] h-[22px] bg-[#F4F4F5] rounded-full"></button>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-7">
              <button className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[137px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
            </div>
            <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 " />
            <div className="flex gap-7">
              <button className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[360px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
            </div>
            <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 " />
            <div className="flex gap-7">
              <button className="w-[64px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[360px] h-[28px] bg-[#F4F4F5] rounded-full"></button>
            </div>
            <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 " />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <button className="w-[250px] h-[32px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[165px] h-[36px] bg-[#F4F4F5] rounded-full"></button>
            </div>
            <div className="flex gap-5">
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-full"></button>
              <button className="w-[190px] h-[372px] bg-[#F4F4F5] rounded-full"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
