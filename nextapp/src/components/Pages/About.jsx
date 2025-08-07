"use client";

import Image from "next/image";
import aboutus from "../../images/about.jpg";

const About = () => {
  return (
    <div className="mb-10 flex flex-col w-full mt-12 md:mt-16 container mx-auto">
      <div className="relative w-full">
        <div className="w-full">
          <Image
            src={aboutus}
            alt="About"
            className="w-full h-80 object-cover"
            unoptimized
            priority
          />
        </div>
        <div className="flex z-10 bg-[#15293D] h-32 md:h-50 w-full md:w-132 md:left-6 absolute top-70 md:top-60 text-white rounded-t-3xl">
          <div className="m-auto">
            <p className="text-2xl">About</p>
            <h1 className="text-4xl">Meet PragatiHigh</h1>
          </div>
        </div>
      </div>
      <div className="paragraph text-gray-600 md:w-160 md:h-70 md:ml-auto md:mr-16 mt-24 md:mt-4 p-2">
        <p>
          Pragati was founded in 2053 with the vision of providing high-quality
          education to students from diverse backgrounds. Over the past decades,
          we have grown from a small local school to a renowned educational
          institution known for our commitment to academic excellence,
          innovative teaching methods, and inclusive community. Our history is
          marked by continuous improvement and adaptation to meet the evolving
          needs of our students.
        </p>
        <br />
        <p>
          Throughout the years, PragatiHigh has expanded its facilities,
          introduced new programs, and embraced technological advancements to
          enhance the learning experience. We have built a strong reputation for
          fostering a culture of excellence, where students are encouraged to
          explore their passions, develop critical thinking skills, and become
          active, responsible members of the community. Our alumni have gone on
          to achieve great success in various fields, reflecting the strong
          foundation.
        </p>
      </div>
    </div>
  );
};

export default About;
