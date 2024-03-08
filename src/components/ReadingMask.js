import React, { useState, useEffect, useRef } from "react";

const ReadingMask = () => {
  const [contentTop, setContentTop] = useState(0);
  const [maskVisible, setMaskVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseY = event.clientY;
      setContentTop(mouseY - 100); // Adjusting to center the content space vertically
      setMaskVisible(true);
    };

    const initialMouseMoveHandler = (event) => {
      const mouseY = event.clientY;
      setContentTop(mouseY - 100); // Adjusting to center the content space vertically
      setMaskVisible(true);
      window.removeEventListener("mousemove", initialMouseMoveHandler);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", initialMouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", initialMouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    // Check if contentRef.current is not null before accessing it
    if (contentRef.current) {
      // Set the initial position of the content space relative to the mouse position
      const initialMouseY =
        contentRef.current.getBoundingClientRect().top + window.scrollY + 100; // Adjusting to center the content space vertically
      setContentTop(initialMouseY);
    }
  }, []);

  return (
    <>
      {maskVisible && (
        <>
          <div
            className="accessibly-app-reading-mask-top accessibly-app-reading-mask"
            style={{ height: `${contentTop}px` }}
          ></div>
          <div
            ref={contentRef}
            className="content-space"
            style={{ top: `${contentTop}px` }}
          ></div>
          <div
            className="accessibly-app-reading-mask-bottom accessibly-app-reading-mask"
            style={{ top: `${contentTop + 200}px` }}
          ></div>
        </>
      )}
    </>
  );
};

export default ReadingMask;
