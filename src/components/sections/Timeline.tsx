const milestones = [
  {
    date: 'March 2024',
    title: 'Project Proposal',
    description: 'Proposal submitted for approval and funding to initiate research.',
    marks: 6,
    progress: 6,
  },
  {
    date: 'June 2024',
    title: 'Progress Presentation I',
    description: 'Review of 50% project completion to identify challenges and align progress with objectives.',
    marks: 6,
    progress: 12,
  },
  {
    date: 'July 2024',
    title: 'Research Paper',
    description: 'Contribution to academic knowledge on Federated Learning security with innovative techniques.',
    marks: 10,
    progress: 27,
  },
  {
    date: 'September 2024',
    title: 'Progress Presentation II',
    description: 'Demonstrating 90% completion with a detailed analysis of outcomes and future steps.',
    marks: 18,
    progress: 37,
  },
  {
    date: 'October 2024',
    title: 'Website Assessment',
    description: 'Launching the project website to provide stakeholders with visibility and research details.',
    marks: 2,
    progress: 55,
  },
  {
    date: 'November 2024',
    title: 'Logbook Submission',
    description: 'Tracking project progress and validating all completed activities.',
    marks: 3,
    progress: 57,
  },
  {
    date: 'November 2024',
    title: 'Final Report Submission',
    description: 'Evaluating project outcomes with individual and group reports.',
    marks: 19,
    progress: 61,
  },
  {
    date: 'November 2024',
    title: 'Final Presentation & Viva',
    description: 'Assessing individual contributions through viva presentations.',
    marks: 20,
    progress: 90,
  },
];

const Milestones = () => {
  return (
    <section id="milestones">
      <div className="container mx-auto">
        <br /><br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Timeline in Brief
        <br /><br />
      </span>
        
        <ul className="relative border-l border-gray-200">
          {milestones.map((milestone, index) => (
            <li key={index} className="mb-10 ml-6">
              <div className="absolute -left-3.5 mt-1 w-7 h-7 bg-blue-500 rounded-full border border-white"></div>
              <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105">
                <p className="text-gray-600 text-l">{milestone.date}</p>
                <h3 className="text-4xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-700 mb-4 text-2xl">{milestone.description}</p>
                <p className="text-gray-700 font-bold text-xl">
                  Marks Allocated: {milestone.marks}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
                  <div
                    className="bg-blue-500 h-5 rounded-full text-xl text-white flex justify-center items-center"
                    style={{ width: `${milestone.marks}%` }}
                  >
                    {milestone.marks}%
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Milestones;
