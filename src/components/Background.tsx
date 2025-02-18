export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/10536481-hd_2048_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 bg-[#F5F5DC]/30 backdrop-blur-sm"  
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}
