import { Header } from "../_Features/Header";
export const OneMovieMore = (props) => {
  return (
    <div>
      <Header />
      <div className="w-[1080px] h-[524px] ">
        <div className="w-[1080px] h-[72px] flex justify-between">
          <div className="flex flex-col w-[211px] h-[72px]">
            <p className="text-[36px] text-black text-700">Wicked</p>
            <p className="text-[18px] text-black">2024.11.26 · PG · 2h 40m</p>
          </div>
          <div className="flex flex-col  w-[83px] h-[72px] justify-center items-center ">
            <p className="w-[83px] h-[16px] text-[12px] text-black">Rating</p>
            <div className="flex w-[83px] h-[48px] ">
              <img src="./star.png" className="w-[23px] h-[22px]" />
              <div className="flex flex-col">
                <p>6.9/10</p>
                <p>37k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
