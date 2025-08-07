"use client";

import Image from "next/image";
import schoolsvg from "../../svgs/School1.svg";
import bookssvg from "../../svgs/Books.svg";
import communitysvg from "../../svgs/Community.svg";

const FifthSection = () => {
  return (
    <>
      <section className="section5 relative bg-[#EEF4F8] rounded-t-4xl h-auto pt-16">
        <div className="h-full">
          <div className="container mx-auto px-12 py-8">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl underline underline-offset-8 text-slate-900 font-semibold">
                Activities
              </h2>
              <div className="flex items-center mt-12 justify-between w-full flex-col md:flex-row gap-2">
                <div className="w-full">
                  <Image src={schoolsvg} alt=" " />
                  <h3 className="text-2xl font-bold text-slate-900 mt-6">
                    Academic Excellence
                  </h3>
                  <p className="w-full tracking-tight text-sm">
                    Our rigorous curriculum ensures students are well-prepared
                    for college and life beyond.
                  </p>
                </div>
                <div className="w-full">
                  <Image src={bookssvg} alt=" " />
                  <h3 className="text-2xl font-bold text-slate-900 mt-6">
                    Experienced Faculty
                  </h3>
                  <p className="w-full tracking-tight text-sm">
                    Our rigorous curriculum ensures students are well-prepared
                    for college and life beyond.
                  </p>
                </div>
                <div className="w-full">
                  <Image src={communitysvg} alt=" " />
                  <h3 className="text-2xl font-bold text-slate-900 mt-6">
                    Supportive Community
                  </h3>
                  <p className="w-full tracking-tight text-sm">
                    Our rigorous curriculum ensures students are well-prepared
                    for college and life beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] w-full overflow-hidden">
            <video
              src="/videos/video1.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default FifthSection;
