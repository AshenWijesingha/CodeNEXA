
const ResearchProblem = () => {
    return (
        // <section className="bg-white p-8 md:p-12 lg:p-16">
            <section>
    {/* <ShineBorder
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    > */}

      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Research Objectives
      </span>
      <br /><br />
      
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6"></h2>

                {/* Vulnerability to Backdoor Attacks */}
                <div className="mb-8">
                    
                    <h3 className="text-2xl text-left font-semibold text-gray-700">Detect and Neutralize Backdoor Attacks</h3>
                    <p className="text-gray-600 text-left text-xl mb-4">
                         Implementing HydraGuard to identify and mitigate backdoor patterns through <b>trigger inversion</b> and <b>simple tuning</b>.
                    </p>
                    
                    {/* <div>
                        <img src="https://arxiv.org/html/2406.06207v1/x1.png" alt="HydraGuard Defense" className="w-full lg:w-1/3 rounded-lg shadow-lg lg:ml-8 mt-6 lg:mt-0" />
                    </div> */}
                    {/* <p className="text-gray-600">
                        The research problem lies in developing a defense mechanism that can accurately detect and mitigate backdoor attacks in Federated Learning systems without compromising the accuracy and performance of the global model.
                    </p> */}
                </div>

                {/* Vulnerability to Backdoor Attacks */}
                <div className="mb-8">
                    <h3 className="text-2xl text-left font-semibold text-gray-700">Mitigate Data and Model Poisoning</h3>
                    <p className="text-gray-600 text-left text-xl mb-4">
                         Using SECUNID with <b>LayerCAM heatmaps</b> and <b>Autoencoders</b> to filter out compromised model updates.
                    </p>
                    {/* <div className="h-40 bg-gray-300 mb-4"> </div> */}
                    {/* <p className="text-gray-600">
                        The research problem lies in developing a defense mechanism that can accurately detect and mitigate backdoor attacks in Federated Learning systems without compromising the accuracy and performance of the global model.
                    </p> */}
                </div>

                {/* Vulnerability to Backdoor Attacks */}
                <div className="mb-8">
                    <h3 className="text-2xl text-left font-semibold text-gray-700">Secure Model Communication</h3>
                    <p className="text-gray-600 text-xl text-left mb-4">
                         CodeNexa ensures encrypted data exchange through <b>dynamic metric verification</b> and AES encryption to prevent MITM attacks.
                    </p>
                    {/* <div className="h-40 bg-gray-300 mb-4"> </div> */}
                    {/* <p className="text-gray-600">
                        The research problem lies in developing a defense mechanism that can accurately detect and mitigate backdoor attacks in Federated Learning systems without compromising the accuracy and performance of the global model.
                    </p> */}
                </div>

                {/* Vulnerability to Backdoor Attacks */}
                <div className="mb-8">
                    <h3 className="text-2xl text-left font-semibold text-gray-700">Protect Against Label Inference in VFL</h3>
                    <p className="text-gray-600 text-xl text-left mb-4">
                        SHIELD utilizes <b>confusional autoencoders</b> and <b>noise injection</b> to secure sensitive data in collaborative environments.
                    </p>
                    {/* <div className="h-40 bg-gray-300 mb-4"> </div> */}
                    {/* <p className="text-gray-600">
                        The research problem lies in developing a defense mechanism that can accurately detect and mitigate backdoor attacks in Federated Learning systems without compromising the accuracy and performance of the global model.
                    </p> */}
                </div>
                
            </div>
            {/* </ShineBorder> */}
        </section>
    );
};

export default ResearchProblem;
