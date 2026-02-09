export const Footer = () => {
  return (
    <div className="flex  h-[280px] w-full items-center bg-indigo-700 py-[40px] ">
      <div className="w-[1280px] h-[200px] gap-[120px] flex justify-between  ">
        <div className="w-[247px]">
          <div className="flex gap-2">
            <img src="film.svg" alt="" />
            <h1>Movie Z</h1>
          </div>
          <p className="text-[14px]">© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="w-[913px] justify-end flex gap-[96px] ">
          <div className="w-[174px] flex flex-col gap-5 ">
            <h2>Contact Information</h2>
            <div className="flex gap-2">
              <img src="/mail.svg" alt="" />
              <div>
                <p>Email:</p>
                <p>support@movieZ.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="/mail.svg" alt="" />
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-[12px] w-[300px]">
            <p>Follow us </p>
            <p>Facebook Instagram. Twitter Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
