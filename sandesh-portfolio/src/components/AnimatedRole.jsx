import { useEffect, useState } from "react";

export default function AnimatedRole() {
  const roles = ["SOFTWARE ENGINEER", "AI ENGINEER", "QUANT"];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setSpeed(50);
        } else {
          // Pause before deleting
          setSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting backward
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          setSpeed(30);
        } else {
          // Move to next role
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setIsDeleting(false);
          setSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, speed]);

  return (
    <h1
      className="
  text-[56px] sm:text-[72px] lg:text-[110px]
  font-black leading-[0.9]
  text-white tracking-tighter
  min-h-[120px] sm:min-h-[160px] lg:min-h-[200px]
"
    >
      <span className="inline-block">
        {displayText}
        <span className="animate-pulse ml-1 inline-block w-[3px] h-[1em] bg-orange-500" />
      </span>
      <span className="block text-[#1a1a1a] dark:text-white/10 mt-2">
        {/* Secondary line for visual hierarchy */}
      </span>
    </h1>
  );
}
