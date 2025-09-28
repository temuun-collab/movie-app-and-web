export const Pagination = (props) => {
  
  return (
    <div className="w-[1280px] h-[40px] flex justify-end">
        <div className="w-[382px] h-[40px] flex flex-row gap-[3px]">
            <button className="w-[114px] h-[40px] flex justify-center items-center text-[#09090B]"><img src="./paginationVector" className="w-[5px] h-[5px]"/>Previous</button>
             <div className="w-[172px] h-[40px] flex flex-row gap-[3px]">
            <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">1</button>
            <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">2</button>
            <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">...</button>
            <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">5</button>
            </div>
            <button className="w-[88px] h-[40px] flex justify-center items-center text-black">Next<img src="./paginationNextVector" className="w-[5px] h-[5px]"/></button>
        </div>
       
    </div>
    
  );
};