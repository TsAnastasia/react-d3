import { useEffect, useRef } from "react";

const TutorialPage = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current;
    }
  }, []);

  return (
    <main>
      <h1>Tutorial</h1>
      <section ref={containerRef}></section>
    </main>
  );
};

export default TutorialPage;
