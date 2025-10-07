import { useState, useEffect } from "react";
import { Genre } from "../_component/Genre";
const apiLink = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const HeaderGenreDropdown = (props) => {
  const [allGenre, setAllGenre] = useState([]);
  const [genre, setGenre] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const [page, setPage] = useState(1);
  const apiLinkSearchMovieMore = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`;
  const activeButtonGenre = () => {
    setGenre(!genre);
  };
  const handleInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setAllGenre(jsonData.genres);
  };
  const getDataSearchMovieMore = async () => {
    const data = await fetch(apiLinkSearchMovieMore, options);
    const jsonData = await data.json();
    setSearchList(jsonData.results);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (!searchValue || searchValue.trim() === "") return;
    getDataSearchMovieMore();
  }, [searchValue]);

  return (
    <div className="flex gap-[12px] relative">
      <button
        onClick={activeButtonGenre}
        className="w-[97px] h-[36px] rounded-md border-1 g-[8px] bg-white flex gap-[8px] justify-center items-center max-sm:hidden"
      >
        <img className="w-[8px] h-[4px]" src="/logo1.png" />
        <p className="w-[41px] h-[20px] text-[14px] text-black ">Genre</p>
      </button>
      {genre && (
        <div
          className="absolute mt-10 w-[577px] h-[333px] bg-white border border-gray-100 rounded-md shadow-lg z-50"
          onClick={() => {
            setGenre(false);
          }}
        >
          <div className="flex flex-col m-5">
            <div className="w-[213px] h-[60px]">
              <h3 className="text-[24px] text-black">Genres</h3>
              <p className="text-[16px] text-black">
                See lists of movies by genre
              </p>
            </div>
            <hr className="w-[537px] mt-3" />
          </div>
          <div className="grid grid-cols-5 gap-[10px] m-5">
            {allGenre?.map((genre, index) => {
              return (
                <Genre key={index} title={genre.name} movieId={genre.id} />
              );
            })}
          </div>
        </div>
      )}
      {searchList && (
        <div className="w-[557px] flex-col flex m-8  absolute bg-white z-10 mt-10  border-gray-100 rounded-md overflow-y-scroll max-h-[600px]">
          {searchList.map((movie, index) => {
            return (
              <div>
                <div
                  className="w-[553px] m-[8px]"
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <div className="flex flex-row gap-5">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      className="w-[67px] h-[100px] rounded-md"
                    />
                    <div className="flex flex-col w-[454px] h-[99px] gap-5">
                      <div className="flex justify-start w-[454px] h-[51px]">
                        <div className="flex flex-col">
                          <p className="text-[20px] text-black text-600 font-bold">
                            {movie.title}
                          </p>
                          <div className="flex">
                            <img
                              src="/star.png"
                              className="w-[13px] h-[12px]"
                            />
                            <p className="text-[14px] text-black max-sm:w-[141px] max-sm:h-[16px]">
                              {movie.vote_average}/10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[14px] text-black">
                          {movie.release_date}
                        </p>
                        <Link href={`/movie-detail/${movie.id}`}>
                          <button className="w-[120px] h-[36px] text-black flex justify-center items-center">
                            See more
                            <img
                              src="./vector.png"
                              className="w-[9px] h-[9px]"
                            />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="w-[549px] h-0.5 bg-gray-100 border-0 mb-3" />
              </div>
            );
          })}
        </div>
      )}
      <div
        className="w-[379px] h-[36px] flex gap-[10px] rounded-md border-1 border-gray-200  items-center  max-sm:w-[36px] max-sm:h-[36px] max-sm:flex max-sm:justify-between"
        style={{ paddingLeft: "5px" }}
      >
        <img
          src="/logo2.png"
          className="w-[11px] h-[11px] max-sm:w-[12px] max-sm:h-[12px]"
        />
        <input
          className="w-[350px] h-[36px] g-[10px] text-black max-sm:hidden"
          placeholder="Search.."
          onChange={handleInputValue}
        />
      </div>
    </div>
  );
};
