import { useRouter } from "next/navigation";
export const Genre = (props) => {
  const { title, movieId } = props;
  const router = useRouter();
  const handleGenreClick = () => {
    router.push(`/movie-genre/${movieId}`);
    ``;
  };
  return (
    <button
      className="flex justify-center items-center w-auto h-[25px] rounded-full p-2 border-1 border-gray-100 gap-[5px] hover:bg-gray-100 hover:scale-[1.1] hover:font-bold cursor-pointer max-sm:w-auto max-sm:h-[20px]"
      onClick={handleGenreClick}
    >
      <p className=" text-black p-2 text-[10px]">{title}</p>
      <img src="./genreVector.png" className="w-[5px] h-[5px]" />
    </button>
  );
};
