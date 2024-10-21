const ResearchGap = () => {
  return (
    // <section className="bg-white text-black min-h-screen flex flex-col justify-center items-center overflow-hidden">
    <section>
      {/* <ShineBorder
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    > */}
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Research Problem & Solution
      </span>

      <div className="container mx-auto flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="mt-8 space-y-10">
          <div className="">
            <h2 className="text-6xl font-semibold text-black dark:text-white">
              Problem Statement
            </h2>
            <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
              Federated Learning systems are vulnerable to attacks like backdoor
              attacks, model and data poisoning, MITM attacks, and label
              inference. These threats compromise the model's accuracy and
              privacy, making it crucial to develop secure, scalable, and
              interpretable solutions.
            </p>
            <div className="mt-4">
              <video
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
          </div>

          <div className="">
            {/* <h2 className="text-2xl font-semibold text-black dark:text-white">
              Proposed Solution
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              
            </p> */}
            <h2 className="text-6xl font-semibold text-black dark:text-white">
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
                      <p className="text-gray-600 mt-1">
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
                      <p className="text-gray-600 mt-1">
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
                      <p className="text-gray-600 mt-1">
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
                      <p className="text-gray-600 mt-1">
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
