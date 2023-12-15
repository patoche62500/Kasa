import React, { useState, useEffect } from "react";

function Collapse({ title }) {
  const [bIsOpen, setbIsOpen] = useState(false);
  //const [bIsRender, setbIsRender] = useState(true);

  useEffect(() => {
    console.log("effect");
  }, [bIsOpen]);

  return (
    <div className="container__collapse">
      <div className="collapse__box">
        <p>{title}</p>
        <button onClick={() => setbIsOpen(bIsOpen ? false : true)}>
          {bIsOpen ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8069 21.0195C20.3606 21.4658 19.6358 21.4658 19.1896 21.0195L12.3347 14.1647C11.8884 13.7184 11.8884 12.9937 12.3347 12.5474C12.781 12.1011 13.5057 12.1011 13.952 12.5474L20 18.5953L26.048 12.5509C26.4943 12.1047 27.219 12.1047 27.6653 12.5509C28.1116 12.9972 28.1116 13.722 27.6653 14.1683L20.8104 21.0231L20.8069 21.0195Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1931 10.2642C11.6394 9.81787 12.3642 9.81787 12.8104 10.2642L19.6653 17.119C20.1116 17.5653 20.1116 18.29 19.6653 18.7363C19.219 19.1826 18.4943 19.1826 18.048 18.7363L12 12.6883L5.95203 18.7327C5.50575 19.179 4.78099 19.179 4.33471 18.7327C3.88843 18.2865 3.88843 17.5617 4.33471 17.1154L11.1896 10.2606L11.1931 10.2642Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>
      {bIsOpen ? (
        <div className="collapse__content">
          <p>
            Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser
            Sèche-cheveux Cintres
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Collapse;
