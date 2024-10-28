const AchievementsSection = () => {
  return (
    <section id="achievements">
      <div className="container mx-auto">
        <br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Achievements
       <br /><br />
      </span>  
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
            Our research <b>CodeNEXA</b>: A Novel Security Framework for Federated Learning to Mitigate Man-in-the-Middle Attacks was selected for the IEEE UEMCON Awards 2024 conference, and we have already presented our paper at the event.
          </p>
        </div>

        <br />

        <div className="flex justify-center">
          <div className="text-center">
            <img
              src="/assets/achievements/ICAC.png"
              alt="Award"
              className="w-4/5 mx-auto"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-2xl text-gray-700 leading-relaxed">
            Our research paper <b>Project ALVI</b>: Privacy-Driven Defenses Federated Learning Security & Authentication was selected for the ICAC 2024 conference, and we are now ready to present it at the conference.
          </p>
        </div>

        <br />

        <div className="flex justify-center">
          <div className="text-center">
            <img
              src="/assets/achievements/SNAMS.png"
              alt="Award"
              className="w-4/5 mx-auto"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-2xl text-gray-700 leading-relaxed">
            Our research paper <b>HydraGuard</b>: Backdoor immunity in FL Environments was selected for the SNAMS 2024 conference, and we are now ready to present it at the event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
