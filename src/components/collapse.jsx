import React, { useState, useEffect, useRef } from "react";

function Collapse({ title, contentCollapse, description }) {
  const content = useRef(null);
  const [maxHeightContent, setMaxHeightContent] = useState("0");
  const [bIsOpen, setbIsOpen] = useState(false);

  useEffect(() => {
    console.log(bIsOpen);
    if (bIsOpen) {
      // 32 et les padding du container 16 en haut 16 en bas
      setMaxHeightContent(`${content.current.scrollHeight + 32}px`);
    } else {
      setMaxHeightContent("0");
    }
  }, [bIsOpen]);

  return (
    <div className="container__collapse">
      <div className="collapse__box">
        <p>{title}</p>
        <button
          className={`collapse__box__arrow ${bIsOpen && "is-active"}`}
          onClick={() => setbIsOpen(!bIsOpen)}
        >
          <svg
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4703 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8038 5.17148 24.8038 4.50206 24.1344C3.83265 23.465 3.83265 22.3778 4.50206 21.7084L14.7843 11.4262L14.7897 11.4315Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        ref={content}
        className={`collapse__content ${bIsOpen && "is-active"}`}
        style={{ maxHeight: maxHeightContent }}
      >
        <div className={`collapse__content__inside ${bIsOpen && "is-active"}`}>
          <ul>
            {!description ? (
              contentCollapse.map((element, index) => (
                <li key={index}>{element}</li>
              ))
            ) : (
              <li>{description}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Collapse;
