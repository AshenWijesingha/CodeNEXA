const milestones = [
  {
    date: 'February 2024',
    title: 'Project Charter & Proposal',
    description: 'Project charter submission followed by proposal presentation and detailed report submission.',
    marks: 100,
    progress: 0,
    keyDates: [
      '19th Feb - Project Charter',
      '21-22nd Feb - Proposal Presentation',
      '29th Feb - Proposal Report'
    ]
  },
  {
    date: 'May 2024',
    title: 'Progress Presentation I',
    description: 'First progress review including presentation and status documentation.',
    marks: 100,
    progress: 100,
    keyDates: [
      '6-8th May - Progress Presentation',
      '6th May - Status Document 1'
    ]
  },
  {
    date: 'June 2024',
    title: 'Research Paper',
    description: 'Submission of initial research paper documenting findings and methodology.',
    marks: 100,
    progress: 27,
    keyDates: [
      '14th June - Research Paper Submission'
    ]
  },
  {
    date: 'September 2024',
    title: 'Progress Presentation II',
    description: 'Second progress review with updated status documentation.',
    marks: 100,
    progress: 37,
    keyDates: [
      '11-13th Sept - Progress Presentation',
      '11th Sept - Status Document 2'
    ]
  },
  {
    date: 'October 2024',
    title: 'Final Presentation & Website',
    description: 'Project website launch and final presentation with viva assessment.',
    marks: 90,
    progress: 55,
    keyDates: [
      '21st Oct - Website Submission',
      '28-30th Oct - Final Presentation & VIVA'
    ]
  },
  {
    date: 'November 2024',
    title: 'Research Documentation',
    description: 'Research paper registration and logbook submission.',
    marks: 100,
    progress: 75,
    keyDates: [
      '1st Nov - Research Paper Registration',
      '20th Nov - Research Logbook'
    ]
  },
  {
    date: 'December 2024',
    title: 'Final Report',
    description: 'Submission of proofread final report documenting complete project outcomes.',
    marks: 100,
    progress: 100,
    keyDates: [
      '2nd Dec - Final Report (Proofread) Submission'
    ]
  }
];

const Milestones = () => {
  return (
    <section>
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
                <p className="text-gray-600 text-sm md:text-base">{milestone.date}</p>
                <h3 className="text-2xl md:text-4xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-700 mb-4 text-lg md:text-2xl">{milestone.description}</p>
                <p className="text-gray-700 font-bold text-lg md:text-xl">
                  Progress: {milestone.marks}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 md:h-4 mt-3">
                  <div
                    className="bg-blue-500 h-4 md:h-5 rounded-full text-xs md:text-xl text-white flex justify-center items-center"
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
