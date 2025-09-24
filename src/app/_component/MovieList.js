import { MovieCard } from "./MovieCard";
export const MovieList = (props) => {
  const { title } = props;
  return (
    <div
      className="w-[100vw] flex flex-col gap-[30px] items-center"
      style={{ paddingTop: "40px" }}
    >
      <div className="flex justify-between w-[1277px] h-[36px]">
        <p className="text-[24px] text-black 0">{title}</p>
        <button className="w-[120px] h-[36px] text-black flex justify-center items-center">
          See more
          <img src="./vector.png" className="w-[9px] h-[9px]" />
        </button>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex w-[1277px] gap-[30px] ">
          <MovieCard imgSrc="./slide1.png" title="Dear Santa" rating="7" />
          <MovieCard
            imgSrc="./slide2.png"
            title="How To Train Your Dragon Live Action"
            rating="7"
          />
          <MovieCard imgSrc="./slide3.png" title="Alien Romulus" rating="7" />
          <MovieCard imgSrc="./slide4.png" title="From the ashes" rating="7" />
          <MovieCard imgSrc="./slide5.png" title="Space dog " rating="7" />
        </div>
        <div className="flex w-[1277px] gap-[30px] ">
          <MovieCard imgSrc="./slide6.png" title="The order" rating="7" />
          <MovieCard imgSrc="./slide7.png" title="Y2K" rating="7" />
          <MovieCard
            imgSrc="./slide8.png"
            title="Solo leveling ReAwakening"
            rating="7"
          />
          <MovieCard imgSrc="./slide9.png" title="Get Away" rating="7" />
          <MovieCard
            imgSrc="./slide10.png"
            title="Sonic the Hedgehog 3"
            rating="7"
          />
        </div>
      </div>
    </div>
  );
};
