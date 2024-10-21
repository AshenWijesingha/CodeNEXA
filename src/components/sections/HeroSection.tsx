import { Button } from "@/components/ui/button";
import { Eye, Lock, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    // <div id="#home" className="bg-gradient-to-r from-black to-[#ffba08] text-white z-10 p-8 rounded-lg shadow-lg">
    //   <div className="container mx-auto px-4 py-16 sm:py-24">
    //     <div className="text-center">
    //       {/* <HyperText className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
    //         text="Securing Federated Learning"
    //       /> */}
    //       <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
    //         Securing Federated Learning
    //       </h1>
    //       <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
    //         A comprehensive framework to enhance security, reliability, and
    //         privacy in Federated Learning systems.
    //       </p>
    //       <div className="flex flex-wrap justify-center gap-4 mb-12">
    //         <Button
    //           size="lg"
    //           className="bg-white text-2xl text-black hover:bg-gray-100"
    //         >
    //           Learn More
    //         </Button>
    //         <Button
    //           size="lg"
    //           variant="outline"
    //           className="bg-white text-2xl text-black hover:bg-purple-100 hover:text-red-500"
    //         >
    //           Get Started
    //         </Button>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
    //       {[
    //         {
    //           icon: Shield,
    //           title: "HydraGuard",
    //           description: "Hybrid defense against backdoor attacks",
    //         },
    //         {
    //           icon: Lock,
    //           title: "SECUNID",
    //           description: "Filters out malicious updates in FL",
    //         },
    //         {
    //           icon: Eye,
    //           title: "CodeNexa",
    //           description: "Prevents Man-in-the-Middle attacks",
    //         },
    //         {
    //           icon: Zap,
    //           title: "SHIELD",
    //           description: "Protects VFL from label inference attacks",
    //         },
    //       ].map((item, index) => (
    //         <div
    //           key={index}
    //           className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
    //         >
    //           <item.icon className="w-12 h-12 mx-auto mb-4" />
    //           <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    //           <p className="text-sm">{item.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div id="home" className="relative bg-gradient-to-r from-black to-[#ffba08] text-white z-10 p-8 rounded-lg shadow-lg overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="src/assets/videos/Hero1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
        Securing Federated Learning
      </h1>
      <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
        A comprehensive framework to enhance security, reliability, and privacy in Federated Learning systems.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button size="lg" className="bg-white text-2xl text-black hover:bg-gray-100">
          Learn More
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-2xl text-black hover:bg-purple-100 hover:text-red-500"
        >
          Get Started
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {[
        {
          icon: Shield,
          title: "HydraGuard",
          description: "Hybrid defense against backdoor attacks",
        },
        {
          icon: Lock,
          title: "SECUNID",
          description: "Filters out malicious updates in FL",
        },
        {
          icon: Eye,
          title: "CodeNexa",
          description: "Prevents Man-in-the-Middle attacks",
        },
        {
          icon: Zap,
          title: "SHIELD",
          description: "Protects VFL from label inference attacks",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
          <item.icon className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default HeroSection;
