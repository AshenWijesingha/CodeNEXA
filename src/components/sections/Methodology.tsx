
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
      name: "HydraGuard",
      role: "Sub Component",
      description: "Detects backdoor triggers and fine-tunes model layers to remove their effect."
    },
    {
      name: "SECUNID",
      role: "Sub Component",
      description: "Uses visual interpretability tools like LayerCAM to create heatmaps, analyzed by Autoencoders to identify anomalies."
    },
    {
      name: "CodeNexa",
      role: "Sub Component",
      description: "Encrypts model updates and validates metrics during transmission to prevent MITM attacks."
    },
    {
      name: "SHIELD",
      role: "Sub Component",
      description: "Secures VFL systems by obfuscating data using confusional autoencoders and injecting noise to prevent label inference."
    }
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Methodology
      </span>
      <br /><br />
        
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          The proposed security framework comprises four sub-components, each designed to address specific security threats in Federated Learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
          {supervisors.map((supervisor, index) => (
            <SupervisorCard key={index} {...supervisor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcknowledgementSection;