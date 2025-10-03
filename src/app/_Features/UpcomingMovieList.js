import { MovieCard } from "../_component/MovieCard";
import { LoadingMovieList } from "../_component/LoadingMovieList";
import { useEffect, useState } from "react";
import Link from "next/link";
const apiLink =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const UpcomingMovieList = (props) => {
  const [upcomingMoviesData, setUpcomingMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setUpcomingMoviesData(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <LoadingMovieList />;
  }
  return (
    <div
      className="w-[100vw] flex flex-col gap-[30px] items-center max-sm:w-[430px]"
      style={{ paddingTop: "40px" }}
    >
      <div className="flex justify-between w-[1277px] h-[36px] max-sm:w-[400px]">
        <p className="text-[24px] text-black 0">Upcoming</p>
        <Link href="/upComing">
          <button className="w-[120px] h-[36px] text-black flex justify-center items-center hover:scale-x-110">
            See more
            <img src="./vector.png" className="w-[9px] h-[9px]" />
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[30px] max-sm:w-[430px] max-sm:flex max-sm:flex-col max-sm:items-center">
        <div className=" w-[1277px] gap-[30px] max-sm:w-[350px] grid grid-cols-5 max-sm:grid max-sm:grid-cols-2">
          {upcomingMoviesData.slice(0, 10).map((movie, index) => {
            return (
              <MovieCard
                key={index}
                title={movie.title}
                imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                rating={movie.vote_average}
                movieId={movie.id}
              />
            );
          })}
        </div>
        {/* <div className="flex w-[1277px] gap-[30px] max-sm:hidden">
          {upcomingMoviesData.slice(5, 10).map((movie, index) => {
            return (
              <MovieCard
                key={index}
                title={movie.title}
                imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                rating={movie.rating}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
};
