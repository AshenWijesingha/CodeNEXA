
const SupervisorCard = ({ name, role, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

const AcknowledgementSection = () => {
  const supervisors = [
    {
      name: "Mr. Kanishka Yapa",
      role: "Primary Supervisor",
      description: "We express our sincere gratitude for his unwavering support, insightful feedback, and invaluable guidance throughout the project. His expertise and dedication have significantly shaped our academic journey and research."
    },
    {
      name: "Mr. Samadhi Rathnayake",
      role: "Co-Supervisor",
      description: "We are deeply thankful for his constructive suggestions and collaborative spirit. His encouragement and assistance have greatly enhanced the quality of our work."
    },
    {
      name: "Mr. Kasun Karunarathne",
      role: "External Supervisor",
      description: "We extend our appreciation for his insightful perspectives and expertise beyond our institution. His contributions have added a valuable new dimension to our research, elevating it to a higher level."
    }
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Section 8
      </span>
        
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We would like to express our heartfelt gratitude to our supervisors for their guidance and support throughout this project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supervisors.map((supervisor, index) => (
            <SupervisorCard key={index} {...supervisor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcknowledgementSection;