import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const ScrollingText = () => {
  return (
    <div>
        <br /><br />
    <VelocityScroll
      text="CodeNexa by Team Alvi" 
      default_velocity={5}
      className="font-display text-center text-xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
    <br /><br />
    </div>
    
  );
}

export default ScrollingText;
