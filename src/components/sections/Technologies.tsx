
const TechnologiesUsed = () => {
  const baseDomain = "https://samitha-vidhanaarachchi.github.io/Research-Website/";
  
  const technologies = [
    { name: 'Python', image: `${baseDomain}Images/tech/python.png` },
    { name: 'React', image: `${baseDomain}Images/tech/react.png` },
    { name: 'Tensorflow', image: `${baseDomain}Images/tech/tensorflow.png` },
    { name: 'Keras', image: `${baseDomain}Images/tech/keras.png` },
    { name: 'MongoDB', image: `${baseDomain}Images/tech/mongo.jpg` },
    { name: 'VS Code', image: `https://code.visualstudio.com/favicon.ico` },
    { name: 'Google Cloud', image: `${baseDomain}Images/tech/googlecloud.png` },
    { name: 'GitHub', image: `https://github.com/fluidicon.png` },
    { name: 'Docker', image: `${baseDomain}Images/tech/doker.png` },
    { name: 'Google Colab', image: `${baseDomain}Images/tech/colab.png` },
    { name: 'Amazon AWS', image: `https://imgs.search.brave.com/DkXtxsh5abUFA13ArNlndiAftLFNG8EY5oVlGhD4NWs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkzL0Ft/YXpvbl9XZWJfU2Vy/dmljZXNfTG9nby5z/dmcvMjIwcHgtQW1h/em9uX1dlYl9TZXJ2/aWNlc19Mb2dvLnN2/Zy5wbmc` },
    { name: 'OpenAI', image: `https://openai.com/favicon.ico` }
  ];

  return (
    <section id="tech_used">
        <br />
      <div className="container mx-auto">
        <br /><br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
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
