import React from "react";

function About() {
  return (
    <div>

      <div className="About-content my-20 lg:px-0 md:px-[32px] px-[16px] relative">


        <div className="px-[16px] md:px-[32px] text-and-image flex flex-col lg:flex-row gap-[60px] lg:items-center lg:max-w-[1192px] mx-auto relative">
          <div className="texts flex flex-col gap-5 lg:w-[509px]">
            <p className="text-preset-5 text-[var(--neutral-900)] bg-[var(--orange-500)] w-[119px] px-[6px] py-[2px] rounded-[6px]">
              Our mission
            </p>

            <p className="text-[var(--neutral-900)] text-preset-2 lg:text-[48px] font-extrabold">
              Help more people cook nourishing meals, more often.
            </p>
            <p className="text-preset-6 text-[var(--neutral-600)] lg:w-[509px]">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
              <br />
              <br />
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>

          <picture className="mt-6 lg:mt-0 lg:w-[707px]">
            <source
              srcSet="../assets/images/image-about-our-mission-large.webp"
              media="(min-width:1024px)"
            />
            <source
              srcSet="../assets/images/image-about-our-mission-small.webp"
              media="(min-width:640px)"
            />
            <img
              src="../assets/images/image-about-our-mission-small.webp"
              alt="Woman cooking healthy food"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        <img className="absolute ml-[86%] mt-[17.5%] lg:block md:block md:hidden z-10 sm:hidden" src="../assets/images/pattern-squiggle-2.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[60px] md:px-[32px] px-[16px] py-[48px] max-w-[1192px] mx-auto">
        <p className="text-[var(--neutral-900)] text-preset-2 w-full lg:w-[372px]">
          Why we exist
        </p>

        <div className="flex flex-col gap-[60px] w-full lg:w-[756px]">
          <div className="flex lg:flex-col lg:flex-row gap-[20px]">
            <img
              src="../assets/images/icon-bullet-point.svg"
              className="w-[32px] h-[32px] flex-shrink-0"
              alt="Bullet"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-4 text-[var(--neutral-900)]">
                Cut through the noise.
              </h3>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-col lg:flex-row gap-[20px]">
            <img
              src="../assets/images/icon-bullet-point.svg"
              className="w-[32px] h-[32px] flex-shrink-0"
              alt="Bullet"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-4 text-[var(--neutral-900)]">
                Empower home kitchens.
              </h3>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-col lg:flex-row gap-[20px]">
            <img
              src="../assets/images/icon-bullet-point.svg"
              className="w-[32px] h-[32px] flex-shrink-0"
              alt="Bullet"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-4 text-[var(--neutral-900)]">
                Make healthy look good.
              </h3>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[60px] md:px-[32px] px-[16px] py-[48px] max-w-[1192px] mx-auto">
        <p className="text-[var(--neutral-900)] text-preset-2 w-full lg:w-[372px]">
          Our food philosophy
        </p>

        <div className="flex flex-col gap-[60px] w-full lg:w-[756px]">
          <div className="flex lg:flex-col lg:flex-row gap-[20px]">
            <img
              src="../assets/images/icon-bullet-point.svg"
              className="w-[32px] h-[32px] flex-shrink-0"
              alt="Bullet"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-4 text-[var(--neutral-900)]">
                Whole ingredients first.
              </h3>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-col lg:flex-row gap-[20px]">
            <img
              src="../assets/images/icon-bullet-point.svg"
              className="w-[32px] h-[32px] flex-shrink-0"
              alt="Bullet"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-4 text-[var(--neutral-900)]">
                Respect for time.
              </h3>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-col lg:flex-row gap-[20px]">
            <img
              src="../assets/images/icon-bullet-point.svg"
              className="w-[32px] h-[32px] flex-shrink-0"
              alt="Bullet"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-4 text-[var(--neutral-900)]">
                Sustainable choices.
              </h3>
              <p className="text-preset-6 text-[var(--neutral-600)]">
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </p>
            </div>
          </div>
        </div>
      
      </div>

      <div className="Btp-section lg:my-20 px-4 lg:px-0 md:px-[32px] px-[16px]">
        
        <div className="px-[16px] gap-[64px] md:px-[32px] text-and-image flex flex-col lg:flex-row lg:items-center lg:max-w-[1192px] mx-auto">

          <div className="texts flex flex-col gap-5 lg:w-[376px] lg:py-[48px]">
            <p className="text-[var(--neutral-900)] text-preset-2 lg:text-[48px] font-extrabold">
              Beyond the plate
            </p>
            <p className="text-preset-6 text-[var(--neutral-600)] lg:w-[376px]">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
              <br />
              <br />

              <div className="flex gap-[20px] items-center">
                <div className="w-[10px] h-[10px] bg-[#163A34] rounded-full flex-shrink-0"></div>

                <p className="w-[376px] text-preset-6 text-[var(--neutral-600)]">
                  Encourage family dinners and social cooking.
                </p>
              </div>

              <div className="flex gap-[20px] items-center">
                <div className="w-[10px] h-[10px] bg-[#163A34] rounded-full flex-shrink-0"></div>

                <p className="w-[376px] text-preset-6 text-[var(--neutral-600)]">
                  Reduce reliance on single-use packaging and delivery waste.
                </p>
              </div>
              <div className="flex gap-[20px] items-center">
                <div className="w-[10px] h-[10px] bg-[#163A34] rounded-full flex-shrink-0"></div>

                <p className="w-[376px] text-preset-6 text-[var(--neutral-600)]">
                  Spark curiosity about seasonal produce and local agriculture.
                </p>
              </div>

            </p>
          </div>

          <picture className="mt-6 lg:mt-0 lg:w-[744px]">
            <source
              srcSet="../assets/images/image-about-beyond-the-plate-large.webp"
              media="(min-width:1024px)"
            />
            <source
              srcSet="../assets/images/image-about-beyond-the-plate-small.webp"
              media="(min-width:640px)"
            />
            <img
              src="../assets/images/image-about-beyond-the-plate-small.webp"
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

export default About;
