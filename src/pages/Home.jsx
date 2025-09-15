function Home() {
  return (
    <div className="flex justify-center flex-col lg:px-[124px] md:px-[32px] sm:px-[16px] ">
        <img className="absolute ml-[-10%] mt-[-81%] lg:block md:block md:mt-[-217%] -z-10 sm:hidden" src="../assets/images/pattern-squiggle-1.svg" alt="" />

      <div className="Hero-section mx-auto max-w-[1192px] px-[12px] sm:justify-start overflow-hidden relative">
        <div className="two-text flex flex-col items-start text-left pb-10 lg:items-center lg:text-center">
          <p className="text-preset-1 text-[var(--neutral-900)] w-full max-w-[805px]">
            <span className="relative inline-block">
              <span className="relative z-10">Healthy</span>
              <span className="absolute inset-0 top-1/2 bg-[#FE9F6B] rounded-md z-0"></span>
            </span>{" "}
            meals, zero fuss
          </p>
          <p className="text-preset-6 text-[var(--neutral-600)] w-full max-w-[580px] mt-4">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
          <button className="btn mt-10 text-preset-5 py-[16px] px-[32px]">
            Start exploring
          </button>
        </div>

        
        <picture>
          <source
            srcSet="../assets/images/image-home-hero-large.webp"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="../assets/images/image-home-hero-small.webp"
            media="(min-width: 640px)"
          />
          <img
            src="../assets/images/image-home-hero-small.webp"
            alt="Woman cooking healthy food"
            className="w-full h-auto mt-8 rounded-[8px] shadow-lg px-[8px] py-[8px] mb-[4.8rem] bg-[var(--neutral-0)]"
          />
        </picture>
      </div>

      <div className="Features-section mt-[4.8rem] text-[var(--neutral-900)] mb-[4.8rem]  px-8 ">
        <p className="text-preset-2 lg:text-center pb-6">What you’ll get</p>

        <div className="cards flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-start pt-6">
          <div className="card flex flex-col gap-6 lg:w-[376px]">
            <img
              className="rounded-[12px] w-[60px] py-[14px] px-[18.5px] bg-[var(--neutral-0)]"
              src="../assets/images/carrot.svg"
              alt=""
            />
            <div>
              <p className="text-preset-3 text-[var(--neutral-900)]">
                Whole-food recipes
              </p>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </div>
          </div>

          <div className="card flex flex-col gap-6 lg:w-[376px]">
            <img
              className="rounded-[12px] w-[60px] py-[14px] px-[18.5px] bg-[var(--neutral-0)]"
              src="../assets/images/energy.svg"
              alt=""
            />
            <div>
              <p className="text-preset-3 text-[var(--neutral-900)]">
                Minimum fuss
              </p>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
          </div>

          <div className="card flex flex-col gap-6 lg:w-[376px]">
            <img
              className="rounded-[12px] w-[60px] py-[14px] px-[18.5px] bg-[var(--neutral-0)]"
              src="../assets/images/search.svg"
              alt=""
            />
            <div>
              <p className="text-preset-3 text-[var(--neutral-900)]">
                Search in seconds
              </p>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Real-life-section my-20 px-4 lg:px-0">
        <div className="text-and-image flex flex-col lg:flex-row gap-[48px] lg:items-center lg:max-w-[1192px] mx-auto">
          <div className="texts flex flex-col gap-5 lg:w-[509px]">
            <p className="text-[var(--neutral-900)] text-preset-2 lg:text-[48px] font-extrabold">
              Built for real life
            </p>
            <p className="text-preset-6 text-[var(--neutral-600)] lg:w-[509px]">
              Cooking shouldn’t be complicated. These recipes come in under {" "}
              <span className="relative inline-block">
              <span className="relative z-10 text-preset-5"> 30minutes </span>

              <span className="absolute inset-0 top-1/2 bg-[#FE9F6B] rounded-md z-0"></span>
            </span>{" "} of active time,
              fit busy schedules, and taste good enough to repeat.
              <br />
              <br />
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>

          <picture className="mt-6 lg:mt-0 lg:w-[707px]">
            <source
              srcSet="../assets/images/image-home-real-life-large.webp"
              media="(min-width:1024px)"
            />
            <source
              srcSet="../assets/images/image-home-real-life-small.webp"
              media="(min-width:640px)"
            />
            <img
              src="../assets/images/image-home-real-life-small.webp"
              alt="Woman cooking healthy food"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        </div>
      </div>

      <div className="Call-to-action h-[396px] bg-[#E9EDE8] mx-[124px] py-[96px] flex flex-col items-center justify-between shadow mt-[4.8rem] relative overflow-hidden">
        
        <div className="text-center space-y-4">
          <p className="text-preset-2 text-[var(--neutral-900)] text-[4.8rem]">
            Ready to cook smarter?
          </p>
          <p className="text-preset-6 text-[var(--neutral-600)] text-[2rem]">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>
        <button className="btn w-[176px] px-[16px] py-[24px] h-[57px] text-[2rem] mt-[32px]">
          Browse recipes
        </button>

        <img className="absolute mr-[84%] mt-[-6.7%] z-30 hidden lg:block" src="../assets/images/Illustration.svg" alt="" />
        <img className="absolute ml-[84%] mt-[-7%] z-30 hidden lg:block" src="../assets/images/Illustration2.svg" alt="" />

      </div>

    </div>
  );
}

export default Home;
