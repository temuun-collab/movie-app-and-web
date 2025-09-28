import { useState , useEffect} from "react";
import { Genre } from "../_component/Genre";
export const HeaderGenreDropdown = (props) => {
const [genre , setGenre] = useState(false);
const activeButtonGenre = ()=> {
 setGenre(!genre);
  };
// useEffect(()=>)
  return (
    
    <div className="flex gap-[12px] relative">
      <button onClick={activeButtonGenre} className="w-[97px] h-[36px] rounded-md border-1 g-[8px] bg-white flex gap-[8px] justify-center items-center max-sm:hidden" >
        <img className="w-[8px] h-[4px]" src="./logo1.png" />
        <p className="w-[41px] h-[20px] text-[14px] text-black ">Genre</p>
      </button>
      {genre && (
        <div className="absolute mt-10 w-[577px] h-[333px] bg-white border border-gray-100 rounded-md shadow-lg z-50">
          <div className="flex flex-col m-5">
            <div className="w-[213px] h-[60px]">
              <h3 className="text-[24px] text-black">Genres</h3>
              <p className="text-[16px] text-black">See lists of movies by genre</p>
            </div>
              <hr className="w-[537px] mt-3"/>
          </div>
          <div className="grid grid-cols-5 gap-[10px] m-5">
            <Genre title="Action"/>
          <Genre title="Adventure"/>
          <Genre title="Animation"/>
          <Genre title="Biography"/>
          <Genre title="Comedy"/>
          <Genre title="Crime"/>
          <Genre title="Documentary"/>
          <Genre title="Drama"/>
          <Genre title="Family"/>
          <Genre title="Fantasy"/>
          <Genre title="Film-Noir"/>
          <Genre title="Game-Show"/>
          <Genre title="Horror"/>
          <Genre title="Music"/>
          <Genre title="Musical"/>
          <Genre title="Mystery"/>
          <Genre title="News"/>
          <Genre title="Reality-TV"/>
          <Genre title="Romance"/>
          <Genre title="Sci-Fi"/>
          <Genre title="Short"/>
          <Genre title="Sport"/>
          <Genre title="Talk-show"/>
          <Genre title="Thriller"/>
          <Genre title="War"/>
          <Genre title="Western"/>
          </div>
          
        </div>
      )}
      <div
        className="w-[379px] h-[36px] flex gap-[10px] rounded-md border-1 border-gray-200  items-center  max-sm:w-[36px] max-sm:h-[36px] max-sm:flex max-sm:justify-between"
        style={{ paddingLeft: "5px" }}
      >
        <img
          src="./logo2.png"
          className="w-[16px] h-[16px] max-sm:w-[12px] max-sm:h-[12px]"
        />
        <input
          className="w-[350px] h-[36px] g-[10px] text-black max-sm:hidden"
          placeholder="Search.."
        />
      </div>
    </div>
  );
};
