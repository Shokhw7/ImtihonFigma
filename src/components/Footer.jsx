import React from "react";

function Footer() {
  return (
    <div className="flex flex-col-reverse items-center sm:flex-col sm:items-center md:flex-row md:justify-between w-full md:px-[32px] lg:px-[124px] py-[41px] gap-[24px] mt-[40px]">
      <p className="text-preset-9">Made with <span className="text-preset-8">W7</span></p>
      <div className="social-medias flex gap-[24px]">
          <a href=""><img className="w-[22px] h-[22px]" src="../assets/images/icon-tiktok.svg" alt="" /></a>
          <a href=""><img className="w-[22px] h-[22px]" src="../assets/images/icon-instagram.svg" alt="" /></a>
          <a href=""><img className="w-[22px] h-[22px]" src="../assets/images/icon-bluesky.svg" alt="" /></a>
      </div>
    </div>
  );
}

export default Footer;
