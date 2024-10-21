import { Button, Card, Typography } from "magic-ui-react"; // Adjust import based on Magic UI version
import "magic-ui-react/dist/index.css"; // Ensure you import Magic UI styles
import React from "react";

const ResearchObjectives = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Typography
          variant="h2"
          className="text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Research Objectives
        </Typography>

        {/* Main Objectives */}
        <Card className="mb-10 p-6 shadow-lg border border-gray-200 rounded-lg">
          <Typography
            variant="h3"
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            Detect and Neutralize Backdoor Attacks
          </Typography>
          <Typography className="text-gray-600 text-lg">
            The primary objective of this research is to develop a comprehensive
            and robust defense framework that enhances the security,
            reliability, and interpretability of Federated Learning systems. The
            framework aims to address the most critical security threats in FL,
            including backdoor attacks, data and model poisoning attacks,
            Man-in-the-Middle (MITM) attacks, and label inference attacks, by
            integrating advanced techniques in anomaly detection, visual
            interpretability, encryption, and secure computation. The proposed
            framework will be designed to provide multi-layered protection,
            ensuring that the FL system remains secure even in the presence of
            sophisticated adversarial attacks. By combining different defense
            mechanisms, the framework will offer comprehensive coverage against
            a wide range of threats, while also maintaining the scalability and
            efficiency of the FL system.
          </Typography>
        </Card>

        {/* Specific Objectives */}
        <Card className="mb-10 p-6 shadow-lg border border-gray-200 rounded-lg">
          <Typography
            variant="h3"
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            1.4.2. Specific Objectives
          </Typography>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li>
              <strong>Design and Implement HydraGuard:</strong> Develop a hybrid
              defense strategy that combines Trigger Inversion and Simple Tuning
              techniques to detect and mitigate backdoor attacks in Federated
              Learning models. HydraGuard will focus on identifying potential
              backdoor triggers from model gradients and fine-tuning specific
              layers of the model to neutralize these threats. The goal is to
              significantly reduce the success rate of backdoor attacks while
              maintaining high model accuracy.
            </li>
            <li>
              <strong>Develop and Integrate SECUNID:</strong> Create a
              malicious-user detection method that utilizes LayerCAM, a visual
              interpretability tool, and Autoencoders to identify and filter out
              compromised local model updates in FL environments. SECUNID will
              generate heatmaps to visually inspect models for potential
              irregularities and use Autoencoders to analyze these heatmaps,
              detecting anomalies that could indicate compromised models. This
              dual approach will enhance the security of the global model
              against data and model poisoning attacks.
            </li>
            <li>
              <strong>Implement CodeNexa:</strong> Introduce a dynamic metric
              verification mechanism and encryption protocols to protect FL
              systems from Man-in-the-Middle (MITM) attacks. CodeNexa will focus
              on calculating, encrypting, and validating key performance
              metrics, such as accuracy, precision, and recall, throughout the
              FL process. By securing these metrics and ensuring their integrity
              during model aggregation, CodeNexa will safeguard the FL system
              from unauthorized alterations during communication.
            </li>
            <li>
              <strong>Develop SHIELD:</strong> Create a defense mechanism for
              Vertical Federated Learning (VFL) systems that leverages
              confusional autoencoders (CoAE), noise addition techniques, and a
              simplified Secure Multi-Party Computation (SMC) framework to
              protect against label inference attacks. SHIELD will focus on
              obscuring data representations and securely aggregating model
              updates, reducing the risk of sensitive label inference and
              enhancing privacy in VFL environments.
            </li>
            <li>
              <strong>Validate the Effectiveness and Scalability:</strong>{" "}
              Conduct extensive experiments to evaluate the effectiveness and
              scalability of the proposed defense mechanisms across different
              datasets and FL scenarios, including non-IID data distributions.
              The validation process will involve testing the proposed framework
              in various real-world scenarios to ensure its applicability and
              robustness in different environments.
            </li>
            <li>
              <strong>Enhance Interpretability and Usability:</strong> Ensure
              that the proposed defense mechanisms not only provide strong
              security guarantees but also offer clear interpretability of model
              decisions. This will involve developing tools and techniques that
              allow researchers and practitioners to understand and explain the
              decisions made by the model, particularly in the face of
              adversarial attacks. The goal is to improve the usability and
              trustworthiness of Federated Learning systems in sensitive
              applications.
            </li>
            <li>
              <strong>Explore Commercial Applications:</strong> Investigate the
              potential for commercial deployment of the proposed defense
              framework in privacy-sensitive industries such as healthcare,
              finance, and telecommunications. This objective will involve
              assessing the feasibility of integrating the framework into
              existing FL platforms and exploring potential business models for
              its commercialization. The goal is to bridge the gap between
              theoretical research and practical applications, ensuring that the
              proposed framework can be deployed in real-world settings.
            </li>
          </ul>
        </Card>

        {/* Placeholder for Images */}
        <div className="h-32 bg-gray-200 mb-10 flex items-center justify-center rounded-lg shadow-md">
          <span className="text-gray-500">Image Placeholder 1</span>
        </div>

        <div className="h-32 bg-gray-200 mb-10 flex items-center justify-center rounded-lg shadow-md">
          <span className="text-gray-500">Image Placeholder 2</span>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" className="mt-6">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectives;
