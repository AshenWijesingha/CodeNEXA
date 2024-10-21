
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#FDFEFE]">
      <div className="container mx-auto">
        <br />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Contact Us
       <br />
      </span>
        <div className="sub-section">
            <br />
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2> */}
          <div className="flex flex-col md:flex-row mt-8">
            {/* Contact Form */}
            <div className="md:w-1/2 w-full px-4 mb-8 md:mb-0 text-2xl">
              <form
                action="MAILTO: project.alvi@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Name Input */}
                <div className="form-group flex flex-col md:flex-row items-center">
                  <label
                    htmlFor="name"
                    className="text-xl font-semibold text-gray-700 md:w-1/4 text-right mb-2 md:mb-0 md:mr-4"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="name"
                    placeholder="¬_¬ Your Name "
                  />
                </div>

                {/* Email Input */}
                <div className="form-group flex flex-col md:flex-row items-center">
                  <label
                    htmlFor="email"
                    className="text-xl font-semibold text-gray-700 md:w-1/4 text-right mb-2 md:mb-0 md:mr-4"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>

                {/* Message Input */}
                <div className="form-group flex flex-col md:flex-row items-center">
                  <label
                    htmlFor="message"
                    className="text-xl font-semibold text-gray-700 md:w-1/4 text-right mb-2 md:mb-0 md:mr-4"
                  >
                    Message or Query
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="message"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-[250px] py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l mt-4"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="md:w-1/2 w-full px-4">
              <div className="contact-details">
                <p className="text-3xl font-semibold text-gray-900 mb-4">
                  <strong>Contact Details</strong>
                </p>
                <p className="text-xl text-gray-700 mb-4">
                  For further queries please reach us at{" "}
                  <a
                    href="mailto:researchcoco@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    project.alvi@gmail.com
                  </a>
                </p>
                <p className="text-xl text-gray-700">
                  Hope this project helped you in some manner. Thank you!
                </p>
                <p className="text-xl font-semibold text-gray-800 mt-4">- Project ALVI Team 👾</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
