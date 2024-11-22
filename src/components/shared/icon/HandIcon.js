import React from "react";

function HandIcon() {
  const style = {
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "optimizeQuality",
    fillRule: "evenodd",
    clipRule: "evenodd",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="24px"
      height="15px"
      style={style}
    >
      <g>
        <path
          style={{ opacity: 1 }}
          fill="#fcfcfd"
          d="M -0.5,-0.5 C 55.5,-0.5 111.5,-0.5 167.5,-0.5C 167.5,30.8333 167.5,62.1667 167.5,93.5C 111.5,93.5 55.5,93.5 -0.5,93.5C -0.5,62.1667 -0.5,30.8333 -0.5,-0.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 1 }}
          fill="#04318d"
          d="M 67.5,4.5 C 74.8742,4.38387 82.2075,4.88387 89.5,6C 97.8825,9.01509 106.216,12.0151 114.5,15C 128.28,15.8112 141.947,17.4778 155.5,20C 161.158,21.8294 162.992,25.6627 161,31.5C 159.581,32.4601 158.081,33.2935 156.5,34C 143.487,34.1673 130.487,34.6673 117.5,35.5C 121.336,39.3763 122.503,44.043 121,49.5C 119.172,51.0814 117.172,52.4147 115,53.5C 114.501,56.5182 114.668,59.5182 115.5,62.5C 115.423,64.299 114.923,65.9656 114,67.5C 111.314,68.6759 108.981,70.3425 107,72.5C 107.472,77.7369 105.305,81.2369 100.5,83C 81.1989,86.9394 62.8656,84.2728 45.5,75C 43.6508,73.907 41.9842,72.5737 40.5,71C 36.5787,70.797 32.7454,70.297 29,69.5C 21.5506,53.2004 21.7173,37.0338 29.5,21C 34.5634,20.7521 39.5634,20.0855 44.5,19C 51.5894,13.1291 59.2561,8.29572 67.5,4.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 1 }}
          fill="#113590"
          d="M 14.5,12.5 C 19.1785,12.3342 23.8452,12.5008 28.5,13C 28.9574,13.414 29.2907,13.914 29.5,14.5C 25.3085,15.1921 22.4752,17.5254 21,21.5C 18.0285,36.0758 17.6952,50.7424 20,65.5C 20.8911,71.2189 24.0578,74.8856 29.5,76.5C 29.2907,77.086 28.9574,77.586 28.5,78C 15.6927,81.5256 8.52604,76.6923 7,63.5C 4.49383,48.6542 5.16049,33.9875 9,19.5C 10.3823,16.6945 12.2156,14.3612 14.5,12.5 Z"
        />
      </g>
    </svg>
  );
}

export default HandIcon;