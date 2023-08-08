import "./App.css";

import RhemaLogo from "./assets/rhema-logo.png";
import KingPriest from "./assets/king-priest.svg";
import { useEffect, useState } from "react";

function App() {
  const [hideBtn, setHideBtn] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setHideBtn(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [hideBtn]);

  return (
    <div className="screens h-screen">
      <div className="hidden md:flex bg-background-main h-screen items-center justify-center">
        <div className="w-[90%] h-[85vh] group">
          <div className="transition-[height] duration-500 ease-in-out h-full bg-picnic-full bg-cover bg-center rounded-2xl hover:h-[85%]">
            <div className="w-full h-full flex justify-center items-center">
              <div className=" w-[70%] relative flex justify-between">
                <div className="w-1/2 relative">
                  <div className="font-Graduation text-white text-[12rem]">
                    Picnic
                  </div>
                  <img
                    src={KingPriest}
                    alt="King and Priest"
                    className="absolute -top-10 left-48 w-[40%] h-[40%]"
                  />
                </div>
                <div className=" text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-MediaSans text-2xl">2023</span>
                    <div className="flex flex-col font-SequelSans text-xs leading-3">
                      <span>Singles & Youth</span>
                      <span>Fellowship Week</span>
                    </div>
                  </div>
                  <button className="custom-button font-SequelSans">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto my-8 w-fit hidden group-hover:flex items-center justify-center gap-3">
            <div className="text-center flex justify-end">
              <img
                className="w-[60%]"
                src={RhemaLogo}
                alt="Rhema Chapel Logo"
              />
            </div>
            <div className="flex flex-col text-[16px] leading-5 text-[#514F5F] self-end font-SequelSans">
              <span className="">Rhema Chapel Int'l</span>
              <span className="">Churches Bodija Ibadan</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-background-main h-full pt-5 flex flex-col items-center justify-center">
        <div className="flex w-[90%] h-[85%] items-center justify-center bg-picnic-mobile bg-cover bg-bottom rounded-md">
          <div className="w-[90%] h-[70%] relative flex flex-col items-center justify-between">
            <div className="">
              <div className="font-Graduation text-white text-[7rem]">
                Picnic
              </div>
              <img
                src={KingPriest}
                alt="King and Priest"
                className="absolute -top-10 left-48 w-[25%] h-[25%]"
              />
              <div className="flex justify-center">
                <button
                  className={`custom-button-mobile font-SequelSans ${
                    hideBtn ? "op-0" : "op-1"
                  }`}
                >
                  Register Now
                </button>
              </div>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-between gap-2">
                <span className="font-MediaSans text-2xl">2023</span>
                <div className="flex flex-col font-SequelSans text-xs leading-3">
                  <span>Singles & Youth</span>
                  <span>Fellowship Week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 w-[90%] flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="text-center flex justify-center">
              <img
                className="w-[50%] h-[50%]"
                src={RhemaLogo}
                alt="Rhema Chapel Logo"
              />
            </div>
            <div className="flex flex-col text-[13px] leading-4 text-[#514F5F] self-end font-SequelSans">
              <span className="">Rhema Chapel Int'l</span>
              <span className="">Churches Bodija Ibadan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
