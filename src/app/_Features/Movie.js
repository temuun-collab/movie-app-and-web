import { MovieList } from "../_component/MovieList";
export const Movie = (props) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <MovieList title="Upcoming" />
      <MovieList title="Popular" />
      <MovieList title="Top Rated" />
    </div>
  );
};
