import React, { useEffect, useRef } from 'react';
import './Section.css'; // You can add styles for .visible here

function Section({ id, title, children }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section id={id} ref={ref}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
