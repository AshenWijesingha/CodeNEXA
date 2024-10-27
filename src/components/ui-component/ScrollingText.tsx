import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const ScrollingText = () => {
  return (
    <div>
        <br /><br />
    <VelocityScroll
      text="Project ALVI by Team FedGuardians"
      default_velocity={5}
      className="font-display text-center text-2xl sm:text-4xl md:text-7xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:leading-[5rem]"
    />
    <br /><br />
    </div>
    
  );
}

export default ScrollingText;
