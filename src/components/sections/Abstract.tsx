
const Abstract = () => (
  <section className="container justify-self-center">
    {/* <ShineBorder
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    > */}

      {/* <span id="LiteratureSurvey" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Literature Survey
      </span> */}

      <span
  id="LiteratureSurvey"
  className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
>
  Literature Survey
</span>
      
      <br /><br />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Security Framework for Federated Learning
        </h2>
      </div>

    <div className="flex flex-col lg:flex-row items-center mb-8">
      <p className="lg:w-1/2 text-2xl text-gray-700 leading-relaxed">
        Federated Learning (FL) facilitates decentralized model training across various clients while safeguarding data privacy, but it poses significant security risks, such as backdoor attacks, poisoning attacks, Man-in-the-Middle (MITM) attacks, and label inference attacks. This research introduces a security framework with four core components, each tailored to mitigate specific threats in FL environments.
      </p>
      <div className=" flex flex-col lg:flex-row items-center mb-8 h-40 bg-gray-300 mb-4" id="component-diagrams">
        <img
        src="/assets/component-diagrams/all.jpeg"
        alt="Federated Learning"
        className="w-1/2 lg:w-1/3 rounded-lg shadow-lg lg:ml-8 mt-6 lg:mt-0"
      />
      <video
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      autoPlay
      loop
      muted
      playsInline
      >
      <source src="/assets/videos/Hero1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>

      </div>
      
    </div>

    <div className="flex flex-col lg:flex-row items-center mb-8">
      <p className="lg:w-1/2 text-2xl text-gray-700 leading-relaxed">
        HydraGuard is a hybrid defense against backdoor attacks, combining Trigger Inversion and Simple Tuning methods. Trigger Inversion identifies potential backdoor triggers by reconstructing patterns from model gradients, while Simple Tuning adjusts specific layers of the model to neutralize these threats. This dual approach reduces backdoor attack success rates while maintaining model accuracy.
      </p>
      <img
        src="/assets/component-diagrams/Hydrag.png"
        alt="HydraGuard Defense"
        className="w-full lg:w-1/3 rounded-lg shadow-lg lg:ml-8 mt-6 lg:mt-0"
      />
    </div>

    <div className="flex flex-col lg:flex-row items-center mb-8">
      <p className="lg:w-1/2 text-2xl text-gray-700 leading-relaxed">
        SECUNID addresses data and model poisoning attacks by filtering out
        malicious updates before they are integrated into the global model. It
        utilizes LayerCAM, a visual interpretability tool, and an Autoencoder to
        detect and exclude anomalies, ensuring only legitimate updates
        contribute to the model.
      </p>
      <img
        src="/assets/component-diagrams/secunid.png"
        alt="SECUNID Framework"
        className="w-full lg:w-1/3 rounded-lg shadow-lg lg:ml-8 mt-6 lg:mt-0"
      />
    </div>

    <div className="flex flex-col lg:flex-row items-center mb-8">
      <p className="lg:w-1/2 text-2xl text-gray-700 leading-relaxed">
        CodeNexa prevents MITM attacks by implementing dynamic metric
        verification, which encrypts and validates key performance metrics
        during FL, safeguarding the system from unauthorized alterations during
        communication.
      </p>
      <img
        src="/assets/component-diagrams/capture.png"
        alt="CodeNexa Security"
        className="w-full lg:w-1/3 rounded-lg shadow-lg lg:ml-8 mt-6 lg:mt-0"
      />
    </div>

    <div className="flex flex-col lg:flex-row items-center mb-8">
      <p className="lg:w-1/2 text-2xl text-gray-700 leading-relaxed">
        SHIELD protects Vertical Federated Learning (VFL) systems from label
        inference attacks using confusional autoencoders, noise addition, and a
        simplified Secure Multi-Party Computation (SMC) framework. These
        techniques obscure data representations, reducing the risk of sensitive
        label inference.
      </p>
      <img
        src="/assets/component-diagrams/shield.png"
        alt="SHIELD Protection"
        className="w-full lg:w-1/3 rounded-lg shadow-lg lg:ml-8 mt-6 lg:mt-0"
      />
    </div>

    {/* <div className="text-center mt-12">
      <p className="text-lg text-gray-700 leading-relaxed">
        This comprehensive framework offers a robust, multi-layered defense that
        enhances FL systems' security, reliability, and privacy without
        compromising performance.
      </p>
    </div> */}
    {/* </ShineBorder> */}
  </section>
);

export default Abstract;
