import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let rafId;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], label');
      setIsHovering(!!target);
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.dot} ${isVisible ? styles.visible : ''}`}
      />
      <div
        ref={ringRef}
        className={`${styles.ring} ${isVisible ? styles.visible : ''} ${isHovering ? styles.hovered : ''}`}
      />
    </>
  );
};

export default Cursor;
