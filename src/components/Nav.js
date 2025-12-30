

import React, { useState, useRef, useEffect } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, Bs1Square } from "react-icons/bs";
import { FaLaptopCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaChess } from "react-icons/fa6";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navRef = useRef(null);

  const navItems = [
    { to: "home", icon: <BiHomeAlt /> },
    { to: "about", icon: <BiUser /> },
    { to: "skills", icon: <FaLaptopCode /> },
    { to: "experience", icon: <RiHomeOfficeLine /> },
    { to: "work", icon: <BsBriefcase /> },
    { to: "services", icon: <BsClipboardData /> },
    { to: "education", icon: <FaUserGraduate /> },
    { to: "certifications", icon: <PiCertificateDuotone /> },
    { to: "interests", icon: <FaChess /> },
    { to: "contact", icon: <Bs1Square /> },
  ];

  const totalItems = navItems.length;
  const visibleItems = 4;
  const maxScroll = totalItems - visibleItems;

  // Calculate position along the curve for each icon
  const getIconPosition = (index) => {
    const adjustedIndex = index - scrollPosition;
    
    // Only show 4 icons at a time
    if (adjustedIndex < -0.5 || adjustedIndex > visibleItems - 0.5) {
      // Icons outside the visible range
      if (adjustedIndex < -0.5) {
        // Icon exiting on the left - goes down
        const exitProgress = Math.abs(adjustedIndex + 0.5);
        return {
          angle: -90,
          opacity: Math.max(0, 1 - exitProgress * 2),
          scale: Math.max(0.5, 1 - exitProgress * 0.5),
          translateY: exitProgress * 100,
        };
      } else {
        // Icon exiting on the right - goes down
        const exitProgress = adjustedIndex - (visibleItems - 0.5);
        return {
          angle: 90,
          opacity: Math.max(0, 1 - exitProgress * 2),
          scale: Math.max(0.5, 1 - exitProgress * 0.5),
          translateY: exitProgress * 100,
        };
      }
    }

    // Icons on the curve
    // Map position 0-3 to angle -60 to 60 degrees (120 degree arc)
    const normalizedPosition = adjustedIndex / (visibleItems - 1);
    const angle = (normalizedPosition - 0.5) * 120; // -60 to 60 degrees
    
    return {
      angle,
      opacity: 1,
      scale: 1,
      translateY: 0,
    };
  };

  // Handle arrow navigation
  const scrollNav = (direction) => {
    const newPosition = scrollPosition + direction;
    if (newPosition >= 0 && newPosition <= maxScroll) {
      setScrollPosition(newPosition);
    }
  };

  // Handle mouse/touch drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches?.[0]?.pageX);
    setScrollLeft(scrollPosition);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches?.[0]?.pageX;
    const walk = (startX - x) / 50; // Adjust sensitivity
    const newPosition = Math.max(0, Math.min(maxScroll, scrollLeft + walk));
    setScrollPosition(newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleMouseMove);
        window.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto pb-0">
          {/* Left Arrow Button */}
          {scrollPosition > 0 && (
            <button
              onClick={() => scrollNav(-1)}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all duration-300 text-sm sm:text-base"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Right Arrow Button */}
          {scrollPosition < maxScroll && (
            <button
              onClick={() => scrollNav(1)}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all duration-300 text-sm sm:text-base"
            >
              <FaChevronRight />
            </button>
          )}

          {/* Half Circle Navigation Container */}
          <div
            ref={navRef}
            className="relative w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] overflow-visible cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            style={{ userSelect: 'none' }}
          >
            {/* Background Half Circle - Responsive */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[135px] sm:w-[350px] sm:h-[168px] md:w-[400px] md:h-[192px] lg:w-[450px] lg:h-[216px] bg-black/10 backdrop-blur-2xl rounded-t-full overflow-hidden">
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Icons positioned along the curve */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[135px] sm:w-[350px] sm:h-[168px] md:w-[400px] md:h-[192px] lg:w-[450px] lg:h-[216px]">
              {navItems.map((item, index) => {
                const position = getIconPosition(index);
                const { angle, opacity, scale, translateY } = position;

                // Calculate x, y position on the circle - Responsive radius
                // Mobile: 119px, SM: 149px, MD: 170px, LG: 191px
                const radiusBase = typeof window !== 'undefined' ? 
                  (window.innerWidth < 640 ? 119 :
                   window.innerWidth < 768 ? 149 :
                   window.innerWidth < 1024 ? 170 : 191) : 170;
                
                const radius = radiusBase;
                const angleRad = (angle * Math.PI) / 180;
                const x = Math.sin(angleRad) * radius;
                const y = Math.cos(angleRad) * radius;

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-20}
                    className="absolute cursor-pointer transition-all duration-500 ease-out"
                    style={{
                      left: '50%',
                      bottom: '0px',
                      transform: `translate(-50%, 0px) translate(${x}px, ${-y + translateY}px) scale(${scale})`,
                      opacity: opacity,
                      pointerEvents: opacity > 0.3 ? 'auto' : 'none',
                    }}
                  >
                    <div className="relative w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] flex items-center justify-center group">
                      {/* Icon circle */}
                      <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/50 text-lg sm:text-xl md:text-xl lg:text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white border border-white/10">
                        {item.icon}
                      </div>
                      
                      {/* Active indicator */}
                      <div className="absolute -bottom-1 sm:-bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white opacity-0 group-[.active]:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-1 sm:mt-2 pb-1 sm:pb-2">
            {Array.from({ length: maxScroll + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setScrollPosition(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  Math.round(scrollPosition) === index
                    ? 'bg-white/70 w-3 sm:w-4'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
