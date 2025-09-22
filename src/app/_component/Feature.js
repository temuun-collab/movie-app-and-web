export const Feature = (props) => {
  const { src, text, header } = props;
  return (
    <div>
      <div>
        <img
          src={src}
          className="w-[100vw] h-[600px] "
          style={{ position: "absolute" }}
        />
        <div className="flex flex-col ">
          <p className="text-[16px] text-black">{text}</p>
          <h1>{header}</h1>
        </div>
      </div>
    </div>
  );
};
