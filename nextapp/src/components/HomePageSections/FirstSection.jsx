const FirstSection = () => {
  return (
    <>
      <section className="w-full container mx-auto h-auto mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between px-12 py-4 md:py-8 gap-2">
          <div className="text-4xl md:text-6xl text-slate-800">
            Discover Your <br /> Potential Education
          </div>
          <div className="flex items-center md:items-start justify-center flex-col text-lg text-slate-800">
            <p>
              Our school provides dynamic envoronment that <br /> empowers
              students to new heights.
            </p>
            <button className="text-white text-lg font-semibold bg-slate-800 px-4 py-2 mt-4 cursor-pointer">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
