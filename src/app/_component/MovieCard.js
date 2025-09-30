import { useRouter } from "next/navigation";
export const MovieCard = (props) => {
  const { imgSrc, title, rating, movieId } = props;
  const router = useRouter();
  console.log("this is movieId", movieId);
  const handleMovieClick = () => {
    router.push(`movie-detail/${movieId}`);
  };
  return (
    <div
      className="w-[229px] h-[439px] flex flex-col max-sm:w-[157px] "
      style={{ cursor: "pointer" }}
      onClick={handleMovieClick}
    >
      <img
        src={imgSrc}
        className="w-[229px] h-[340px] rounded-md max-sm:w-[157px] max-sm:h-[300px]"
      />
      <div className="w-[229px] h-[95px] bg-gray-100 flex flex-col items-center justify-center rounded-md max-sm:w-[157px] max-sm:h-[76px]">
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
