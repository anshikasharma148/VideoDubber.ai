import React from 'react';

export default function Hero() {
  return (
    <div className="p-6 bg-white">
      <nav className="flex items-center mb-2 ml-[19rem]">
        <a href="#" className="text-gray-500">Home</a>
        <span className="mx-2">/</span>
        <a href="#" className="text-gray-500">Product</a>
        <span className="mx-2">/</span>
        <span className="text-gray-500">VideoDubber - Fast Video Translator</span>
      </nav>

      <div className="flex items-center mb-2 ml-[15rem]">
        <h1 className="text-[24px] font-bold ml-[4rem]">VideoDubber - Fast Video Translator</h1>
      </div>

      <div className="w-full flex justify-start items-center ml-[15rem]">
        <div className="mr-4">
        <p className="text-[24px] text-gray-500 ml-[4rem]">Translate videos in your own voice, globalize in a click!</p>

        </div>

        <div className="flex items-center">
        <button className="relative text-gray-800 bg-white hover:bg-gray-100 rounded-md flex items-center justify-center border border-black" style={{ height: '64px', width: '90px' }}>
            <span className="mr-1">&#9660;</span>
            <span>Visit</span>
          </button>
          <button className="relative text-white bg-red-500 rounded-md flex items-center justify-center ml-2 overflow-hidden" style={{ height: '64px', width: '224px' }}>
            <span className="mr-2">&#9650;</span>
            <span className="text-md font-semibold text-white uppercase">UPVOTE 101</span>
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
