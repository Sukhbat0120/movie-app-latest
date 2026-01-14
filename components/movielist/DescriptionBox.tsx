import { TrailerModals } from "./TrailerModal";

type Texttype = {
  texth2: string;
  texth1: string;
  textp: string;
  vo: number;
};

export const DescriptionBox = ({ texth2, texth1, textp, vo }: Texttype) => {
  return (
    <div className="w-[404px] mr-[896px] mt-[178px] ml-[140px] gap-10   flex flex-col    ">
      <div className=" h-[112px]  ">
        <h2 className="p-2 text-base ">{texth2}</h2>
        <h1 className="text-4xl">{texth1}</h1>
        <div className="flex p-2 gap-2">
          <img src="/star.svg" alt="" />
          <p>
            <span>{vo}</span>/10
          </p>
        </div>
      </div>

      <p className="text-xs">{textp} </p>
      <TrailerModals
        buttoncss="w-[145px] h-[40px] rounded-2xl"
        text="watch trailer"
        trailerUrl="dfb"
      />
    </div>
  );
};
