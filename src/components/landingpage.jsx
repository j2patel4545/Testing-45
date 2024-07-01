import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';
import locomotiveScroll from 'locomotive-scroll';


function LandingPage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Add more options here if needed
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll data-scroll-section data-scroll-speed="-0.5" className="relative flex-col w-full h-screen pt-1">
      <div className="textstructure mt-[16vh] px-20">
        {["Creating", "..Engaging ", "Presentations"].map((item, index) => (
          <div className="classmaske" key={index}>
            <h1 className="flex uppercase leading-[7vw] text-[7.5vw] font-['Founders_Grotesk_X-Condensed'] tracking-tight font-semibold">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "13vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[13vw] h-[8vw] mt-2 rounded-md mr-2 text-black bg-[url('../public/images/back-eye2.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden bg-green-200"
                  ></motion.div>
                )}
              </div>
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-[16vh] flex items-center py-5 px-20 justify-between">
        {["For Public and private company's", "From pitch to TPO"].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="flex px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-sm capitalize">
            Start the Project
          </div>
          <div className="flex w-3 h-3 border-[1px] border-zinc-500 rounded-full">
            <span className="flex rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
