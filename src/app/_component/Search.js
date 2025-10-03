import { useRouter } from "next/navigation";
export const Search = (props) => {
  const { imgSrc, title, rating, movieId, runtime } = props;
  const router = useRouter();

  const handleMovieClick = () => {
    router.replace(`/movie-detail/${movieId}`);
    ``;
  };
  return (
    <div>
      <div
        className="w-[553px] m-[8px]"
        style={{ cursor: "pointer" }}
        onClick={handleMovieClick}
      >
        <div className="flex flex-row gap-5">
          <img src={imgSrc} className="w-[67px] h-[100px] rounded-md" />
          <div className="flex flex-col w-[454px] h-[99px] gap-5">
            <div className="flex justify-start w-[454px] h-[51px]">
              <div className="flex flex-col">
                <p className="text-[20px] text-black text-600 font-bold">
                  {title}
                </p>
                <div className="flex">
                  <img src="/star.png" className="w-[13px] h-[12px]" />
                  <p className="text-[14px] text-black max-sm:w-[141px] max-sm:h-[16px]">
                    {rating}/10
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-black">{runtime}</p>
              <button className="w-[120px] h-[36px] text-black flex justify-center items-center">
                See more
                <img src="./vector.png" className="w-[9px] h-[9px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[549px] h-0.5 bg-gray-100 border-0 mb-3" />
    </div>
  );
};
