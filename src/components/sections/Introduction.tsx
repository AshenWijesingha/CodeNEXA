import { useEffect, useState } from 'react';

const IntroductionSection = () => {
  const [activeTab, setActiveTab] = useState('background');

  const tabs = [
    { id: 'background', label: 'Background' },
    { id: 'challenges', label: 'Security Challenges' },
    { id: 'defense', label: 'Defense Mechanisms' },
  ];

  const content = {
    background: (
      <div>
        <h3 className="text-2xl font-semibold mb-2">Background</h3>
        <p className="mb-4 text-left text-xl">
          Federated Learning (FL) is a revolutionary approach in machine learning that addresses data privacy concerns. Introduced by Google in 2016, FL allows multiple clients to collaboratively train a global model without centralized data storage, ensuring sensitive data remains on the client side.
        </p>
        <p className="text-left text-xl">
          FL has found significant adoption in industries like healthcare and finance, where data privacy is crucial for compliance with regulations such as HIPAA.
        </p>
      </div>
    ),
    challenges: (
      <div>
        <h3 className="text-2xl font-semibold mb-2">Security Challenges</h3>
        <ul className="list-disc pl-5 space-y-2 text-left text-xl">
          <li>Backdoor attacks: Injecting malicious patterns into training data</li>
          <li>Data and model poisoning: Corrupting data or manipulating model updates</li>
          <li>Man-in-the-Middle (MITM) attacks: Intercepting and altering communication between clients and server</li>
          <li>Label inference attacks in Vertical Federated Learning (VFL)</li>
        </ul>
      </div>
    ),
    defense: (
      <div>
        <h3 className="text-2xl font-semibold mb-2">Defense Mechanisms</h3>
        <p className="mb-4 text-left text-xl">
          Several defense mechanisms have been developed to protect FL systems:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-left text-xl">
          <li>Byzantine-resilient aggregation (e.g., Krum and Bulyan)</li>
          <li>Spectral anomaly detection</li>
          <li>Model inversion for backdoor detection</li>
          <li>Homomorphic encryption and Secure Multi-Party Computation (SMC)</li>
        </ul>
      </div>
    ),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabs.findIndex(tab => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section>
    {/* <ShineBorder
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    > */}

      <span id="ResearchGap" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Research Gap
      </span>
      
      <br /><br />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-4 px-6 text-2xl font-medium ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-6 w-[800px]">{content[activeTab]}</div>
          <br />
        </div>
        <br />
      </div>
        {/* </ShineBorder> */}
  </section>
  );
};

export default IntroductionSection;