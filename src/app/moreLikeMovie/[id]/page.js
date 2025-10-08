"use client";
import { Header } from "@/app/_features/Header";
import { MovieCard } from "@/app/_component/MovieCard";
import { useEffect, useState } from "react";
import { FooterContent } from "@/app/_component/FooterContent";
import { useParams, useSearchParams } from "next/navigation";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function MoreLikeMovie(props) {
  const [moreLikeMovie, setMoreLikeMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [isNextClick, setIsNextClick] = useState(false);
  const [isBackClick, setIsBackClick] = useState(false);
  const searchParams = useSearchParams();
  const param = useParams();
  const { id } = param;
  const search = searchParams.get("id");

  console.log(search);

  const apiLink = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page}`;
  console.log("this is id", id);

  const handleAddpage = () => {
    setPage(page + 1);
    setIsNextClick(true);
    setIsBackClick(false);
  };
  const handleBeforePage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
      setIsNextClick(false);
      setIsBackClick(true);
    }
  };
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();

    setMoreLikeMovie(jsonData.results);
  };

  console.log("moreLikeMovie", moreLikeMovie);

  useEffect(() => {
    getData();
  }, [id]);
  if (!id) {
    return <div>something wrong</div>;
  }
  return (
    <div className="w-[100vw] h-[100vw] bg-white">
      <Header />
      <div
        className="w-[100vw] flex flex-col gap-[30px] items-center"
        style={{ paddingTop: "40px" }}
      >
        <div className="flex justify-between w-[1277px] h-[36px]">
          <p className="text-[24px] text-black 0">More like this</p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className=" w-[1277px] gap-[30px]  grid grid-cols-5">
            {page === 1 &&
              moreLikeMovie?.slice(0, 10).map((movie, index) => {
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
            {page === 2 &&
              moreLikeMovie?.slice(10, 20).map((movie, index) => {
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
        </div>
      </div>
      <div className="mt-5 mb-5">
        <div className="w-[1280px] h-[40px] flex justify-end">
          <div className="w-[382px] h-[40px] flex flex-row gap-[3px]">
            <button
              className="w-[114px] h-[40px] flex justify-center items-center text-[#09090B] rounded-md cursor-pointer"
              onClick={handleBeforePage}
              style={{
                border: isBackClick ? "1px solid black" : "none",
                color: isBackClick ? "black" : "gray",
              }}
            >
              <img src="./paginationVector" className="w-[5px] h-[5px]" />
              Previous
            </button>
            <div className="w-[172px] h-[40px] flex flex-row gap-[3px]">
              <button
                className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md "
                style={{ border: isBackClick ? "1px solid black" : "none" }}
              >
                1
              </button>
              <button
                className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  "
                style={{ border: isNextClick ? "1px solid black" : "none" }}
              >
                2
              </button>
              <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">
                ...
              </button>
              <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">
                5
              </button>
            </div>
            <button
              className="w-[88px] h-[40px] flex justify-center items-center text-black cursor-pointer rounded-md"
              onClick={handleAddpage}
              style={{
                border: isNextClick ? "1px solid black" : "none",
                color: isNextClick ? "black" : "gray",
              }}
            >
              Next
              <img src="./paginationNextVector" className="w-[5px] h-[5px]" />
            </button>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}
