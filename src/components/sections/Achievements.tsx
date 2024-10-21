const AchievementsSection = () => {
  return (
    <section id="achievements">
      <div className="container mx-auto">
        <br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Achievements
       <br /><br />
      </span>     
      <br /><br />   
        <div className="flex justify-center">
          <div className="text-center">
            <img
              src="https://ieee-uemcon.org/wp-content/uploads/2023/04/The-11th-Annual-IEEE-Information-Technology-Electronics-and-Mobile-Communication-Conference-2-3-2048x316.jpg"
              alt="Award"
              className="w-4/5 mx-auto"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-2xl text-gray-700 leading-relaxed">
            We were selected as finalists to represent Sri Lanka Institute of
            Information Technology at the Une IEEE Unicon Awards 2024
            and ICAC 2024.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
