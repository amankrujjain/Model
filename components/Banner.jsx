
import React from "react";
import Pic from '../assets/images/banner.png'

const Banner = () => {
  return (
      <div className="dark:bg-gray-900">
          <div className="w-full container mx-auto py-9 md:py-12 lg:py-24">
              <div className="relative mx-4">
                  <img src={Pic} alt="Fashion first" className="w-full h-full hidden lg:block" />
                  <img src={Pic} alt="Fashion first" className="hidden sm:block lg:hidden w-full h-full" />
                  <img src={Pic} alt="Fashion first" className="sm:hidden w-full h-full" />
              </div>
          </div>
      </div>
  );
};

export default Banner;

