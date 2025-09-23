export const FooterContent = (props) => {
  const { src, text, text1 } = props;
  return (
    <div className="w-[100vw] flex justify-center">
      <div
        className="w-[1440px] h-[280px] bg-[#4338CA] flex justify-center items-center"
        style={{ paddingTop: "40px" }}
      >
        <div className="flex w-[1280px] h-[200px] justify-between">
          <div className="flex flex-col items-start gap-[5px]">
            <div className="flex gap-[8px] w-[90px] h-[20px]">
              <img className="w-20px h-20px " src="./film.png" />
              <h1 className="text-white text-[16px] font-inter">Movie Z</h1>
            </div>
            <p className="text-[14px]">© 2024 Movie Z. All Rights Reserved</p>
          </div>
          <div
            className="flex flex-col w-[174px] h-[200px]  gap-[12px]"
            style={{ paddingLeft: "150px" }}
          >
            <p className="text-[14px]  w-[174px]">Contact Information</p>
            <div className="flex flex-col gap-[12px]">
              <div className="flex w-[146px] h-20px] justify-center items-center gap-[10px]">
                <img src="./email.png" className="w-[13px] h-[10px]" />
                <div className="flex flex-col">
                  <p className="text-[14px]">Email:</p>
                  <p className="text-[14px]">support@movieZ.com</p>
                </div>
              </div>
              <div className="flex w-[146px] h-20px] justify-center items-center gap-[10px]">
                <img src="./phone.png" className="w-[13px] h-[10px]" />
                <div className="flex flex-col">
                  <p className="text-[14px]">phone:</p>
                  <p className="text-[14px]">+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="text-[14px]">Follow Us</p>
            <div className="flex gap-[5px]">
              <p>Facebook </p>
              <p>Instagram </p>
              <p>Twitterk </p>
              <p>Youtube </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
