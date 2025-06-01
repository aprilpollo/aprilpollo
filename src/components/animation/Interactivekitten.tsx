"use client";
import React, { useEffect, useRef } from "react";
import "../../styles/Interactivekitten.css";

function Interactivekitten() {
  const catWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const legRefs = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cat = catRef.current;
    const head = headRef.current;
    const wrapper = wrapperRef.current;
    const catWrapper = catWrapperRef.current;

    if (!cat || !head || !wrapper || !catWrapper) return;

    legRefs.current = cat.querySelectorAll(".leg");

    const walk = () => {
      cat.classList.remove("first_pose");
      legRefs.current?.forEach((leg) => leg.classList.add("walk"));
    };

    const handleMouseMotion = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      walk();
    };

    const handleTouchMotion = (e: TouchEvent) => {
      if (!e.targetTouches.length) return;
      pos.current.x = e.targetTouches[0].clientX;
      pos.current.y = e.targetTouches[0].clientY;
      walk();
    };

    const turnRight = () => {
      cat.style.left = `${pos.current.x - 90}px`;
      cat.classList.remove("face_left");
      cat.classList.add("face_right");
    };

    const turnLeft = () => {
      cat.style.left = `${pos.current.x + 10}px`;
      cat.classList.remove("face_right");
      cat.classList.add("face_left");
    };

    const decideTurnDirection = () => {
      const rect = cat.getBoundingClientRect();
      if (rect.x < pos.current.x) {
        turnRight();
      } else {
        turnLeft();
      }
    };

    const headMotion = () => {
      if (pos.current.y > wrapper.clientHeight - 100) {
        head.style.top = "-15px";
      } else {
        head.style.top = "-30px";
      }
    };

    const jump = () => {
      catWrapper.classList.remove("jump");
      if (pos.current.y < wrapper.clientHeight - 250) {
        setTimeout(() => {
          catWrapper.classList.add("jump");
        }, 100);
      }
    };

    const decideStop = () => {
      const offset = cat.offsetLeft;
      if (
        (cat.classList.contains("face_right") &&
          pos.current.x - 90 === offset) ||
        (cat.classList.contains("face_left") && pos.current.x + 10 === offset)
      ) {
        legRefs.current?.forEach((leg) => leg.classList.remove("walk"));
      }
    };

    const intervalId = setInterval(() => {
      if (!pos.current.x || !pos.current.y) return;
      decideTurnDirection();
      headMotion();
      decideStop();
    }, 100);

    const jumpIntervalId = setInterval(() => {
      if (!pos.current.x || !pos.current.y) return;
      jump();
    }, 1000);

    document.addEventListener("mousemove", handleMouseMotion);
    document.addEventListener("touchmove", handleTouchMotion);

    return () => {
      clearInterval(intervalId);
      clearInterval(jumpIntervalId);
      document.removeEventListener("mousemove", handleMouseMotion);
      document.removeEventListener("touchmove", handleTouchMotion);
    };
  }, []);
  return (
    <>
      <div className="outer_wrapper">
        <div className="wrapper" ref={wrapperRef}>
          <div className="cat_wrapper" ref={catWrapperRef}>
            <div className="cat first_pose" ref={catRef}>
              <div className="cat_head" ref={headRef}>
                <svg
                  x="0px"
                  y="0px"
                  width="100%"
                  height="100%"
                  viewBox="0 0 76.4 61.2"
                  id="cat_svg"
                >
                  <polygon
                    id="cat_polygon"
                    className="eyes"
                    points="63.8,54.1 50.7,54.1 50.7,59.6 27.1,59.6 27.1,54.1 12.4,54.1 12.4,31.8 63.8,31.8 "
                  />
                  <path
                  className="st0"
                    d="M15.3,45.9h5.1V35.7h-5.1C15.3,35.7,15.3,45.9,15.3,45.9z M45.8,56.1V51H30.6v5.1H45.8z M61.1,35.7H56v10.2h5.1
                V35.7z M10.2,61.2v-5.1H5.1V51H0V25.5h5.1V15.3h5.1V5.1h5.1V0h5.1v5.1h5.1v5.1h5.1v5.1c0,0,15.2,0,15.2,0v-5.1h5.1V5.1H56V0h5.1v5.1
                h5.1v10.2h5.1v10.2h5.1l0,25.5h-5.1v5.1h-5.1v5.1H10.2z"
                  />
                </svg>
              </div>
              <div className="body">
                <svg
                  x="0px"
                  y="0px"
                  width="100%"
                  height="100%"
                  viewBox="0 0 91.7 40.8"
                  id="cat_svg"
                >
                  <path
                    className="st0"
                    d="M91.7,40.8H0V10.2h5.1V5.1h5.1V0h66.2v5.1h10.2v5.1h5.1L91.7,40.8z"
                  />
                </svg>
                <div className="tail">
                  <svg
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 25.5 61.1"
                    id="cat_svg"
                  >
                    <polygon
                      id="cat_polygon"
                      points="10.2,56 10.2,50.9 5.1,50.9 5.1,40.7 0,40.7 0,20.4 5.1,20.4 5.1,10.2 10.2,10.2 10.2,5.1 15.3,5.1 
                  15.3,0 25.5,0 25.5,10.2 20.4,10.2 20.4,15.3 15.3,15.3 15.3,20.4 10.2,20.4 10.2,40.7 15.3,40.7 15.3,45.8 20.4,45.8 20.4,50.9 
                  25.5,50.9 25.5,61.1 15.3,61.1 15.3,56 "
                    />
                  </svg>
                </div>
              </div>
              <div className="front_legs">
                <div className="leg one">
                  <svg
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 30.5"
                    id="cat_svg"
                  >
                    <polygon
                      id="cat_polygon"
                      points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 "
                    />
                  </svg>
                </div>
                <div className="leg two">
                  <svg
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 30.5"
                    id="cat_svg"
                  >
                    <polygon
                      id="cat_polygon"
                      points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 "
                    />
                  </svg>
                </div>
              </div>
              <div className="back_legs">
                <div className="leg three">
                  <svg
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 30.5"
                    id="cat_svg"
                  >
                    <polygon
                      id="cat_polygon"
                      points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 "
                    />
                  </svg>
                </div>
                <div className="leg four">
                  <svg
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 30.5"
                    id="cat_svg"
                  >
                    <polygon
                      id="cat_polygon"
                      points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0 "
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ground"></div>
      </div>
    </>
  );
}

export default Interactivekitten;
