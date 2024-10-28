const ResearchGap = () => {
  return (
    // <section className="bg-white text-black min-h-screen flex flex-col justify-center items-center overflow-hidden">
    <section>
      {/* <ShineBorder
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    > */}
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Research Problem & Solution
      </span>

      <div className="container mx-auto flex flex-col py-12 px-4">
        <div className="mt-8 space-y-10">
           {/* <div className=""> */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black dark:text-white">
              Problem Statement
            </h2>
            {/*
            <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Federated Learning systems are vulnerable to attacks like backdoor
              attacks, model and data poisoning, MITM attacks, and label
              inference. These threats compromise the model's accuracy and
              privacy, making it crucial to develop secure, scalable, and
              interpretable solutions.
            </p>
            <div className="mt-4">
              <video
                controls
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto portrait-video"
                style={{ width: "300px", height: "auto" }}
              >
              <source src="/assets/videos/HackCNN.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>
            </div>
          </div> */}

          <div className="flex justify-between p-8 text-gray-600 text-left text-xl mb-4">
            <div className="w-3/4 pr-4 bg-white shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Code Nexa</h2>
              <p className="lg:w-full text-2xl text-gray-700 leading-relaxed">
              Dynamic Nature of Federated Learning (FL). Continuous Model Integrity Verification. Protection Against MITM Attacks
              </p>
              {/* <ul className="list-disc pl-5 mb-8">
                <li className="mb-2"></li>
                <li className="mb-2">Continuous Model Integrity Verification</li>
                <li className="mb-2">Protection Against MITM Attacks</li>
              </ul> */}
              <br />
              <h2 className="text-2xl font-bold mb-4">Hydraguard</h2>
              <p className="lg:w-full text-2xl text-gray-700 leading-relaxed">
              Continuous attacks are more aggressive than single-shot attacks. Detecting and Rejecting malicious weights leads to data loss, and data breaches and reduces module accuracy. Existing defense mechanisms need big computational power and violate the essence of the FL. Unreliable Predictions.
              </p>
              {/* <ul className="list-disc pl-5 mb-8">
                <li className="mb-2"></li>
                <li className="mb-2">Detecting and Rejecting malicious weights leads to data loss, and data breaches and reduces module accuracy.</li>
                <li className="mb-2">Existing defense mechanisms need big computational power and violate the essence of the FL.</li>
                <li className="mb-2">Unreliable Predictions.</li>
              </ul> */}
              <br />
              <h2 className="text-2xl font-bold mb-4">Secunid</h2>
              <p className="lg:w-full text-2xl text-gray-700 leading-relaxed">
                Existing defenses, such as distance-based metrics (e.g., Krum, Trimmed-Mean), struggle to detect sophisticated attacks where malicious updates resemble legitimate ones. Attackers alter their local model updates during training, sending manipulated updates to the central server, which degrades the global model's accuracy and reliability. Current methods usually require some knowledge of the attacks, Malicious participant ratio Examining local datasets (compromise the privacy of participants) Assuming IID data 
              </p>
              {/* <ul className="list-disc pl-5 mb-8">
                <li className="mb-2">Existing defenses, such as distance-based metrics (e.g., Krum, Trimmed-Mean), struggle to detect sophisticated attacks where malicious updates resemble legitimate ones.</li>
                <li className="mb-2">Attackers alter their local model updates during training, sending manipulated updates to the central server, which degrades the global model's accuracy and reliability.</li>
                <li className="mb-2">Current methods usually require some knowledge of the attacks,</li>
                <ul className="list-decimal pl-5 mb-2">
                  <li className="mb-2">Malicious participant ratio</li>
                  <li className="mb-2">Examining local datasets (compromise the privacy of participants)</li>
                  <li className="mb-2">Assuming IID data</li>
                </ul>
              </ul> */}
              <br />
              <h2 className="text-2xl font-bold mb-4">SHIELD</h2>
              <p className="lg:w-full text-2xl text-gray-700 leading-relaxed">
Limited Defense Mechanisms: Current VFL security protocols are not robust enough to fully prevent label inference attacks, leading to potential data breaches. Lack of scalable solutions that balance privacy and performance. Insufficient Mitigation Strategies: Existing solutions may not effectively address all types of label inference attacks, especially sophisticated passive and active forms. Existing methods for defending against label inference attacks in VFL are computationally expensive (e.g., Secure Multi-Party Computation). Insufficient focus on lightweight mechanisms for privacy preservation in collaborative learning environments.
              </p>
            </div>

            <div className="w-3/4 pl-4 pt-[110px]">
                <video
                controls
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto portrait-video w-full rounded-lg shadow-2xl"
                style={{ width: "300px", height: "auto" }}
              >
                <source src="/assets/videos/HackCNN.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="">
            {/* <h2 className="text-2xl font-semibold text-black dark:text-white">
              Proposed Solution
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              
            </p> */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black dark:text-white">
              Proposed Solution
            </h2>
            <div className="container mx-auto px-4 py-8">
              <div className="flex-shrink-0">
                <span className="text-blue-600 text-4xl font-bold">
                  Project ALVI
                </span>
                <br />
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ul className="space-y-6">
                  <li className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-shrink-0">
                      <span className="text-blue-600 text-2xl font-bold">1.</span>
                    </div>
                    <div className="ml-4 mt-2 md:mt-0">
                      <h3 className="text-xl text-left font-semibold text-gray-800">
                        HydraGuard
                      </h3>
                      <p className="text-gray-600 mt-1 text-lg">
                        Mitigates backdoor attacks through{" "}
                        <span className="font-medium text-blue-600">
                          trigger inversion
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-blue-600">
                          simple tuning
                        </span>
                        , ensuring minimal performance impact.
                      </p>
                    </div>
                  </li>

                  <li className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-shrink-0">
                      <span className="text-blue-600 text-2xl font-bold">2.</span>
                    </div>
                    <div className="ml-4 mt-2 md:mt-0">
                      <h3 className="text-xl text-left font-semibold text-gray-800">
                        SECUNID
                      </h3>
                      <p className="text-gray-600 mt-1 text-lg">
                        Identifies poisoned data updates using{" "}
                        <span className="font-medium text-blue-600">
                          LayerCAM heatmaps
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-blue-600">
                          Autoencoders
                        </span>{" "}
                        for anomaly detection.
                      </p>
                    </div>
                  </li>

                  <li className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-shrink-0">
                      <span className="text-blue-600 text-2xl font-bold">3.</span>
                    </div>
                    <div className="ml-4 mt-2 md:mt-0">
                      <h3 className="text-xl text-left font-semibold text-gray-800">
                        CodeNexa
                      </h3>
                      <p className="text-gray-600 mt-1 text-lg">
                        Uses{" "}
                        <span className="font-medium text-blue-600">
                          dynamic metric verification
                        </span>{" "}
                        and encryption to prevent MITM attacks during model
                        communication.
                      </p>
                    </div>
                  </li>

                  <li className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-shrink-0">
                      <span className="text-blue-600 text-2xl font-bold">4.</span>
                    </div>
                    <div className="ml-4 mt-2 md:mt-0">
                      <h3 className="text-xl text-left font-semibold text-gray-800">
                        SHIELD
                      </h3>
                      <p className="text-gray-600 mt-1 text-lg">
                        Defends Vertical Federated Learning (VFL) from label
                        inference attacks through{" "}
                        <span className="font-medium text-blue-600">
                          confusional autoencoders
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-blue-600">
                          noise injection
                        </span>
                        .
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              1.2.3 Lack of Interpretability in Defense Mechanisms
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              Interpretability is another area where existing defense mechanisms fall short. In the context of Federated Learning...
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              1.2.4 Limited Focus on Vertical Federated Learning (VFL) Security
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              While much of the existing research on Federated Learning security focuses on horizontal FL, there is limited attention given to Vertical Federated Learning (VFL)...
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              1.2.5 Need for Integrated Multi-Layered Defense Frameworks
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              Finally, there is a clear need for integrated, multi-layered defense frameworks that can address the full spectrum of security threats in Federated Learning...
            </p>
          </div> */}
        </div>
      </div>

      {/* Placeholder for images */}
      {/* <div className="flex justify-center items-center mt-12">
        <div className="bg-gray-300 w-full max-w-xl h-48 rounded-lg animate-pulse"></div>
        <div className="bg-gray-300 w-full max-w-xl h-48 rounded-lg animate-pulse ml-4"></div>
      </div> */}
      {/* </ShineBorder> */}
    </section>
  );
};

export default ResearchGap;
