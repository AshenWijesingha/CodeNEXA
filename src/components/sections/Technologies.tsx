
const TechnologiesUsed = () => {
  const baseDomain = "https://samitha-vidhanaarachchi.github.io/Research-Website/";
  
  const technologies = [
    { name: 'Python', image: `${baseDomain}Images/tech/python.png` },
    { name: 'React', image: `${baseDomain}Images/tech/react.png` },
    { name: 'Tensorflow', image: `${baseDomain}Images/tech/tensorflow.png` },
    { name: 'Keras', image: `${baseDomain}Images/tech/keras.png` },
    { name: 'MongoDB', image: `${baseDomain}Images/tech/mongo.jpg` },
    { name: 'Firebase', image: `${baseDomain}Images/tech/firebase.png` },
    { name: 'Google Cloud', image: `${baseDomain}Images/tech/googlecloud.png` },
    { name: 'Kafka', image: `${baseDomain}Images/tech/kafka.jpg` },
    { name: 'Docker', image: `${baseDomain}Images/tech/doker.png` },
    { name: 'Google Colab', image: `${baseDomain}Images/tech/colab.png` },
    { name: 'Google map API', image: `${baseDomain}Images/tech/googlemap.png` },
    { name: 'JWT', image: `${baseDomain}Images/tech/jwt.png` }
  ];

  return (
    <section id="tech_used">
        <br />
      <div className="container mx-auto">
        <br /><br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Technologies Used
        <br /><br />
      </span>
        <br /><br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <p className="text-lg font-semibold text-gray-700">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesUsed;
