import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "B.L.H.D Peiris",
    role: "Team Leader",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Systems Engineering",
    image: "/assets/team/1.jpeg",
    linkedin: "https://www.linkedin.com/in/livindu-peiris-75247521b/",
    email: "livindupeiris@gmail.com"
  },
  {
    name: "J.P.A.S. Pathmendre",
    role: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Systems Engineering",
    image: "/assets/team/2.jpeg",
    linkedin: "https://www.linkedin.com/in/aman-shaluka-009539244/",
    email: "amanshaluka1@gmail.com"
  },
  {
    name: "A.R.W.M.V. Hasaranga",
    role: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Systems Engineering",
    image: "/assets/team/4.jpeg",
    linkedin: "https://www.linkedin.com/in/virushan-hasaranga-student-sliit/",
    email: "hasarangavirushan@gmail.com"
  },
  {
    name: "A.M.I.R.B. Athauda",
    role: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Systems Engineering",
    image: "/assets/team/3.jpeg",
    linkedin: "https://www.linkedin.com/in/imanathauda/",
    email: "renushabandara@gmail.com"
  },
  {
    name: "Dr. Kanishka Yapa",
    role: "Supervisor | Lecturer",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Systems Engineering",
    image: "/assets/team/5.png",
    linkedin: "https://www.linkedin.com/in/kanishka-yapa-46590924/",
    email: "kanishka.yapa@gmail.com"
  },
  {
    name: "Mr. Samadhi Rathnayake",
    role: "Co-Supervisor | Lecturer",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Systems Engineering",
    image: "/assets/team/6.png",
    linkedin: "https://www.linkedin.com/in/samadhi-chathuranga-rathnayake/",
    email: "samadhi.mathematica@gmail.com"
  },
  {
    name: "Dr. Kasun Karunarathne",
    role: "External Supervisor",
    university: "PhD from the University of Colombo | MSc from the University of Moratuwa",
    department: "Technology Strategy and Cybersecurity",
    image: "/assets/team/7.png",
    linkedin: "https://www.linkedin.com/in/kasun-karunarathne/",
    email: "kasunsaranga@gmail.com"
  }
];

const TeamMemberCard = ({ member }) => (
  <div>
    <img
      src={member.image}
      className="w-full h-[380px] object-cover shadow-md box-shadow-lg box-shadow-lg box-shadow-gray-500"
      alt={member.name}
    />
    <div className="p-6">
      <h5 className="text-xl font-semibold text-gray-800">{member.name}</h5>
      <span className="block text-xl text-gray-500 mb-4">{member.role}</span>
      <div className="space-y-2">
        <p className="text-sm"><span className="font-bold text-gray-700">University:</span> <span className="text-gray-600">{member.university}</span></p>
        <p className="text-sm"><span className="font-bold text-gray-700">Department:</span> <span className="text-gray-600">{member.department}</span></p>
      </div>
    </div>
    <div className="bg-gray-50 py-4 px-6 flex justify-between">
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <Linkedin className="w-5 h-5 mr-2" />
        LinkedIn
      </a>
      <a href={`mailto:${member.email}`} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <Mail className="w-5 h-5 mr-2" />
        Email
      </a>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section>
        <br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Our Team
       <br /><br />
      </span>
      <br /><br />
      <div className="container mx-auto px-4">
        
        <div className="grid text-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;