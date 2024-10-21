import { FileText } from 'lucide-react';

const downloadsData = [
  {
    title: 'Topic Assessment',
    date: '2021/02/25',
    links: [
      { label: 'Group', url: 'https://drive.google.com/file/d/1bb3MVFdUKWKnGOANRusNcVfQWPL25bHi/view?usp=sharing' },
    ],
  },
  {
    title: 'Project Charter',
    date: '2021/02/25',
    links: [
      { label: 'Group', url: 'https://drive.google.com/file/d/1SkZ36rNGmUOqeJ2POyQYl_jagM2NrtV_/view?usp=sharing' },
    ],
  },
  {
    title: 'Project Proposal',
    date: '2021/03/22',
    links: [
      { label: 'Individual', url: 'https://drive.google.com/drive/folders/1BrImoJHubeT48b5ifj8dLV_JIrXky5Wo?usp=sharing' },
    ],
  },
  {
    title: 'Status Documents I',
    date: '2021/07/05',
    links: [
      { label: 'Individual', url: 'https://drive.google.com/file/d/1mHeXVzJ6FxU8snM32FKT8zj_tnI4Octn/view?usp=sharing' },
    ],
  },
  {
    title: 'Status Documents II',
    date: 'Yet to be submitted, link will be updated soon.',
    links: [
      { label: 'Individual', url: 'https://drive.google.com/drive/folders/1Sy3KKNr3sNIyEIZkXSSjQQ9TDXAoZN24?usp=sharing' },
    ],
  },
];

const presentationsData = [
  {
    title: 'Project Proposal',
    date: '2021/03/14',
    links: [
      { label: 'Group', url: 'https://docs.google.com/presentation/d/1iwkEDXpi3XPNmHHyt3kwsKJ_mwLwe189/edit?usp=sharing&ouid=110826119005364270755&rtpof=true&sd=true' },
    ],
  },
  {
    title: 'Progress Presentation I',
    date: '2021/07/08',
    links: [
      { label: 'Group', url: 'https://docs.google.com/presentation/d/1yqgYxUnWUOKHYTps4OPFHP9TXULljojZ/edit?usp=sharing&ouid=110826119005364270755&rtpof=true&sd=true' },
    ],
  },
  {
    title: 'Progress Presentation II',
    date: '2021/10/18',
    links: [
      { label: 'Group', url: 'https://docs.google.com/presentation/d/1S7m3q_oq1gSP2xm2wiyoJ3-gBXVFcb3K/edit?usp=sharing&ouid=110826119005364270755&rtpof=true&sd=true' },
    ],
  },
  {
    title: 'Final Presentation',
    date: 'Yet to be submitted, link will be updated soon.',
    links: [
      { label: 'Group', url: 'https://drive.google.com/drive/folders/1o2p_otWVavjPy2StceanXwBFqd_w7Yo2?usp=sharing' },
    ],
  },
];

// 

const Downloads = () => {
  return (
    <section id="downloads">
      <div>
        <br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
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
          <p className="text-gray-600 mb-8 text-2xl">Please find all presentations related this project below.</p>
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