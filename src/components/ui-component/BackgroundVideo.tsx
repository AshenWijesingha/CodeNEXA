const horizontalLine = () => {

return (
<> 
<div className="relative">
    <video autoPlay muted loop className="absolute z-[-1000] top-0 left-0 w-full h-full object-cover">
        <source src="/assets/videos/Hero2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>
</>
)
}

export default horizontalLine;