import { useRouter } from "next/navigation";
export const MovieCard = (props) => {
  const { imgSrc, title, rating, movieId } = props;
  const router = useRouter();

  const handleMovieClick = () => {
    router.replace(`/movie-detail/${movieId}`);
    ``;
  };
  return (
    <div
      className="w-[229px] h-[439px] flex flex-col  max-sm:w-[157px] hover:opacity-80"
      style={{ cursor: "pointer" }}
      onClick={handleMovieClick}
    >
      <img
        src={imgSrc}
        className="w-[229px] h-[340px] rounded-md max-sm:w-[157px] max-sm:h-[300px]"
      />
      <div className="w-[229px] max-h-[95px] overflow-y-scroll bg-gray-100 flex flex-col items-center justify-center rounded-md max-sm:w-[157px] max-sm:h-[76px]">
        <div className="flex">
          <img src="/star.png" className="w-[16px] h-[16px]" />
          <p className="w-[193px] h-[23px] text-black max-sm:w-[141px] max-sm:h-[16px]">
            {rating}/10
          </p>
        </div>
        <p className="w-[213px] h-[56px] text-black text-[18px] max-sm:w-[141px] max-sm:h-[40px] max-sm:text-[14px] ">
          {title}
        </p>
      </div>
    </div>
  );
};
