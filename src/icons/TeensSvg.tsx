import React from "react";

const TeensSvg = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.0810547"
        width="49.0809"
        height="49.0809"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_66_11640" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_66_11640"
          width="128"
          height="128"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default TeensSvg;