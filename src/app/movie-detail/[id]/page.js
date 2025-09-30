"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/app/_features/Header";
import { LoadingMovieMore } from "@/app/_component/LoadingMovieMore";
import { MovieCard } from "@/app/_component/MovieCard";
import { FooterContent } from "@/app/_component/FooterContent";
import Link from "next/link";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState();
  const [movieDirector, setMovieDirector] = useState();
  const [sameMovieMore, setSameMovieMore] = useState();
  const [loading, setLoading] = useState(false);
  const param = useParams();

  const { id } = param;
  const apiLink = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const apiLink1 = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const apiLink2 = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
  console.log("this is id", id);

  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();

    console.log("this is my data", jsonData);
    setMovieDetail(jsonData);
    setLoading(false);
  };
  const getData1 = async () => {
    setLoading(true);
    const data = await fetch(apiLink1, options);
    const jsonData = await data.json();

    console.log("this is my data", jsonData);
    setMovieDirector(jsonData);
    setLoading(false);
  };
  const getData2 = async () => {
    setLoading(true);
    const data = await fetch(apiLink2, options);
    const jsonData = await data.json();

    console.log("this is my data", jsonData);
    setSameMovieMore(jsonData.results);
    setLoading(false);
  };
  console.log("movieDetail", movieDetail);
  console.log("movieDirector", movieDirector);
  console.log("loading", loading);
  console.log("SameMovieMore", sameMovieMore);

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    getData1();
  }, [id]);

  useEffect(() => {
    getData2();
  }, [id]);
  if (loading) {
    return (
      <div>
        <LoadingMovieMore />
      </div>
    );
  }
  if (!id) {
    return <div>something wrong</div>;
  }
  if (!movieDetail) {
    return <div>loading...</div>;
  }

  return (
    <div className="bg-white w-[100vw] h-[100vw]">
      <div className="w-[100vw] f">
        <Header />
        <div className="w-[1080px] flex flex-col ">
          <div className="w-[100vw] flex justify-center">
            <div className="w-[1080px] h-[72px] flex justify-between">
              <div className="flex flex-col ">
                <p className="text-[36px] text-black text-700">
                  {movieDetail.title}
                </p>
                <div className="flex gap-2">
                  <p className="text-[18px] text-black">
                    {movieDetail.release_date}
                  </p>
                  <p className="text-[18px] text-black">
                    {movieDetail.runtime}min
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center mt-5 ">
                <p className="w-[250px] h-[16px] text-[12px] text-black">
                  {movieDetail.tagline}
                </p>
                <div className="flex w-[83px] h-[48px] ">
                  <img src="/star.png" className="w-[23px] h-[22px]" />
                  <div className="flex w-[51px] h-[44px] flex-col">
                    <p className="text-[12px] text-black">
                      {movieDetail.vote_average}/10
                    </p>
                    <p className="text-[12px] text-[#71717A]">
                      {movieDetail.vote_count}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100vw] flex justify-center">
            <div className="w-[1080px] h-[428px] flex gap-10 mt-10">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                className="w-[290px] h-[428px] rounded-3"
              />
              <div className="w-[760px] h-[428px] relative ">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
                  className="w-[760px] h-[428px] rounded-3 absolute "
                />
                <div className=" absolute z-10 flex gap-5 mt-90 ml-10">
                  <button className="rounded-full w-[40px] h-40px] bg-white flex justify-center items-center">
                    <img className="w-[9px] h-[12px] " src="/vectorClick.png" />
                  </button>
                  <p className="text-[16px] text-white ">Play trailer</p>
                  <p className="text-[14px] text-white ">2:35</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] flex justify-center mt-10">
            <div className="flex w-[1080px] gap-2 flex-col">
              <div className="flex gap-3">
                {movieDetail?.genres?.map((genre, index) => {
                  return (
                    <button
                      key={index}
                      className="w-auto  text-black border-1 rounded-md border-gray-100 text-[12px]"
                    >
                      {genre.name}
                    </button>
                  );
                })}
              </div>
              <div className="w-[1080px]">
                <p className="text-[16px] text-black">{movieDetail.overview}</p>
              </div>
              <div className="w-[1080px] flex flex-col gap-3">
                <div className="flex gap-5">
                  <p className="font-bold text-bold text-[16px] text-black text-700">
                    Director
                  </p>
                  {movieDirector?.crew.slice(0, 1).map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-[16px] text-black text-400"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 " />
                <div className="flex gap-5">
                  <p className="font-bold text-bold text-[16px] text-black text-700">
                    Writers
                  </p>
                  {movieDirector?.crew.slice(2, 5).map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-[16px] text-black text-400"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 " />
                <div className="flex gap-5">
                  <p className="font-bold text-bold text-[16px] text-black text-700">
                    Stars
                  </p>
                  {movieDirector?.crew.slice(6, 9).map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-[16px] text-black text-400"
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <hr className="w-[1080px] h-0.5 bg-gray-100 border-0 " />
              </div>
              <div className="w-[1080px]  flex flex-col gap-[30px] mt-5">
                <div className="flex justify-between w-[1080px] max-sm:w-[400px]">
                  <p className="text-[24px] text-black 0">More Like This</p>
                  <Link href="/moreLikeMovie">
                    <button className="w-[120px] h-[36px] text-black flex justify-center items-center">
                      See more
                      <img src="/vector.png" className="w-[9px] h-[9px]" />
                    </button>
                  </Link>
                </div>

                <div className=" w-[1150px] gap-[30px] grid grid-cols-5 max-sm:w-[350px] max-sm:grid max-sm:grid-cols-2">
                  {sameMovieMore?.slice(0, 5).map((movie, index) => {
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
          </div>
        </div>
        <div className="mt-5">
          <FooterContent />
        </div>
      </div>
    </div>
  );
}
