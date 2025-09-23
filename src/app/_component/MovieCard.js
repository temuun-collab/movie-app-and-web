export const MovieCard = (props) => {
  const { imgSrc, title, rating } = props;
  return (
    <div className="w-[229px] h-[439px] flex flex-col">
      <img src={imgSrc} className="w-[229px] h-[340px] rounded-md" />
      <div className="w-[229px] h-[95px] bg-gray-100 flex flex-col items-center justify-center rounded-md">
        <div className="flex">
          <img src="./star.png" className="w-[16px] h-[16px]" />
          <p className="w-[193px] h-[23px] text-black">{rating}/10</p>
        </div>
        <p className="w-[213px] h-[56px] text-black text-[18px]">{title}</p>
      </div>
    </div>
  );
};
