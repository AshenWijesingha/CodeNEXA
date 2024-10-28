import "./FlipCard.css";

const FlipCard = ({ title, description }) => {
  return (
    <div className="flip-card w-[500px] h-[500px] bg-white rounded-lg shadow-lg">
      <div className="flip-card-inner w-full h-full relative">
        
        {/* Front Side */}
        <div className="flip-card-front w-auto h-auto absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-black-200 to-white text-white rounded-lg p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2 text-lg">Click to see details</p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back w-auto h-auto absolute inset-0 flex flex-col items-center justify-center bg-white text-black rounded-lg p-4 border border-black">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="mt-2 text-center">{description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default FlipCard;
