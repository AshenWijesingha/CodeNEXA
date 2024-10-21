import { FileText } from 'lucide-react';

const downloadsData = [
{
    title: 'Proposal Presentation',
    date: '2024/02/29',
    links: [
      { label: 'Group', url: 'https://docs.google.com/presentation/d/1axHXJHfMBaNBfoI9x8aucHrjfpB197Gi/edit?usp=sharing&ouid=112929534540738972046&rtpof=true&sd=true' },
    ],
  },
  {
    title: 'Progress Presentation 1',
    date: '2021/02/25',
    links: [
      { label: 'Group', url: 'https://docs.google.com/presentation/d/17OwTRtp7yKUQ2_xTu2HpLVUPyVwSTTSw/edit?usp=sharing&ouid=112929534540738972046&rtpof=true&sd=true' },
    ],
  },
  {
    title: 'Progress Presentation 2',
    date: '2021/03/22',
    links: [
      { label: 'Group', url: 'https://docs.google.com/presentation/d/1Ybwb47-MTZLOQxVBFJD28JGFRL2saiTn/edit?usp=sharing&ouid=112929534540738972046&rtpof=true&sd=true' },
    ],
  },
 ];

const presentationsData = [
{
    title: 'Project Proposal Individual',
    date: '2024/02/29',
    links: [
      { label: 'Individual', url: 'https://drive.google.com/drive/folders/1DfyLbvl72oswMMGyzFobqMxO26ZhHJfJ?usp=sharing' },
    ],
  },
  {
    title: '2. Status Document 1',
    date: '2021/05/06',
    links: [
      { label: 'Individual', url: 'https://drive.google.com/drive/folders/10L-StNyOQFzgzoxbJcgK4P8cwW_qC5H1?usp=sharing' },
    ],
  },
  {
    title: 'Research Paper',
    date: '2024/06/14',
    links: [
      { label: 'Group', url: 'https://drive.google.com/file/d/1y_nauLE96H2KAQNHYfpmC_y0kKY1pOH-/view?usp=sharing' },
    ],
  },
  {
    title: 'Final Report',
    date: '2024/08/23',
    links: [
      { label: 'Individual', url: 'https://drive.google.com/drive/folders/1MtQkF-4tJbU6VHTTp6ar7Mlcm8TA5Rd8?usp=sharing' },
    ],
  },
  {
    title: 'Status Documents 2',
    date: '2024/09/12',
    links: [
      { label: 'Individual', url: 'https://drive.google.com/drive/folders/1hs2umSsPEXLmbNVgg5Xwe0gIqnzfbqmd?usp=sharing' },
    ],
  },
];

// 

const Downloads = () => {
  return (
    <section id="downloads">
      <div>
        <br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Downloads
       <br />
      </span>
      <br />
        <div>
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-left text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Documents
       <br />
      </span>
          <p className="text-gray-600 mb-8 text-2xl">Please find all documents related to this project below.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {presentationsData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-blue-500 mr-3" />
                    <h4 className="text-2xl font-semibold text-gray-800">{item.title}</h4>
                  </div>
                  <p className="text-xl text-gray-600 mb-4">Submitted on {item.date}</p>
                  <ul className="space-y-2">
                    {item.links.map((link, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{link.label}</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          Download
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br /><br />
         <div>
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-left text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Presentations
       <br />
      </span>
          <p className="text-gray-600 mb-8 text-2xl">Please find all presentations related to this project below.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {downloadsData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-blue-500 mr-3" />
                    <h4 className="text-2xl font-semibold text-gray-800">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-xl">Submitted on {item.date}</p>
                  <ul className="space-y-2">
                    {item.links.map((link, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{link.label}</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          Download
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;