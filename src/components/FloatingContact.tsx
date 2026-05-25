import whatsappIcon from '../assets/whatsapp.png';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <a
        href="https://wa.me/923400744384"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-[#25d366]/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon Image */}
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-full h-full object-contain rounded-full relative z-10" 
        />
      </a>
    </div>
  );
}
