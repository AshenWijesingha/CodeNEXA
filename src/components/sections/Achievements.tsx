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
              src="./Images/ach/award.png"
              alt="Award"
              className="w-4/5 mx-auto"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-2xl text-gray-700 leading-relaxed">
            We were selected as finalists to represent Sri Lanka Institute of
            Information Technology at the National Best Quality ICT Awards 2021
            and E-Swabhumani 2021. Furthermore, we have been selected as
            national nominees to represent Sri Lanka in the WSA (World Summit
            Award) and WSA Youth in 2021.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
