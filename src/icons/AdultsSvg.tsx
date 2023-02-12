import React from "react";

const AdultsSvg = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.161865"
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
          <use href="#image0_66_11641" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_66_11641"
          width="128"
          height="128"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default AdultsSvg;