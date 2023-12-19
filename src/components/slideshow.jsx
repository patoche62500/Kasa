import React, { useState } from "react";

function Carrousel({ Image }) {
  let [count, setCount] = useState(0);
  //console.log(Image.length)

  return (
    <div className="container__carrousel">
      <div className="carrousel__img">
        <img src={Image[count]} alt="" />
      </div>
      {Image.length !== 1 ? (
        <>
          <p className="numerotation">{count + 1}/{Image.length}</p>
          <button
            className="arrow__left"
            onClick={() =>
              setCount(count === 0 ? (count = Image.length - 1) : count - 1)
            }
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="arrow__right"
            onClick={() =>
              setCount(count === Image.length - 1 ? (count = 0) : count + 1)
            }
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_247452_254)">
                <path
                  d="M6.48999 21.0106L8.25999 22.7806L18.16 12.8806L8.25999 2.98059L6.48999 4.75059L14.62 12.8806L6.48999 21.0106Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_247452_254">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.880615)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Carrousel;
