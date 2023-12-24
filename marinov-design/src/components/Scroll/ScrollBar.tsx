import React, { useState, useEffect } from 'react';
import style from './style.module.css';

const ScrollBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 1300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div className={style.ScrollBar} onClick={scrollToTop}>
        ^
          {/* <img src="/images/icon-svgs/up-arrow.svg" alt="Scroll to Top" /> */}
      </div>
    )
  );
}

export default ScrollBar;
