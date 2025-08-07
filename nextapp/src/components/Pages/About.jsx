"use client";

import Image from "next/image";
import aboutus from "@/images/aboutus.png";

const About = () => {
  const imageUrl =
    "https://img.freepik.com/premium-photo/composite-image-business-people-working-table_1134-2064.jpg?ga=GA1.1.932490508.1750586865&semt=ais_hybrid&w=740";
  return (
    <div className="min-h-screen mb-10 flex flex-col w-full mt-16 container mx-auto">
      <div className="relative w-full">
        <div className="w-full">
          <Image
            src={aboutus}
            alt="About"
            className="w-full h-80 object-cover"
            unoptimized
          />
        </div>
        <div className="hidden md:flex z-10 bg-[#15293D] h-50 w-132 left-6 absolute top-60 text-white rounded-t-3xl    ">
          <h1 className="m-auto text-4xl">Meet PragatiHigh</h1>
        </div>
      </div>
      <div className="paragraph text-gray-600  w-160 h-70 ml-auto mr-16 mt-4 p-2">
        <p>
          Pragati was founded in 2053 with the vision of providing
          high-quality education to students from diverse backgrounds. Over the
          past decades, we have grown from a small local school to a renowned
          educational institution known for our commitment to academic
          excellence, innovative teaching methods, and inclusive community. Our
          history is marked by continuous improvement and adaptation to meet the
          evolving needs of our students.
        </p>
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
