import React from "react";

const Main = () => {
  return (
    <>
      <div className="text-center p-3  grid justify-center gap-3 grid-cols-[150px_500px_150px] grid-rows-[100px_350px_100px]">
        <div className="row-span-3 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-yellow-600      ">
          NAV
        </div>
        <div className="col-span-2 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-yellow-600    ">
          HEADER
        </div>
        <div className="col-span-1  rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-yellow-600   row-span-1  ">
          ARTICLE
        </div>
        <div className="col-span-1 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-yellow-600 row-span-2   ">
          ADS
        </div>
        <div className="col-span-1 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-yellow-600       ">
          FOOTER
        </div>
      </div>
    </>
  );
};

export default Main;
