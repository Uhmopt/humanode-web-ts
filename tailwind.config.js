// tailwind.config.js
module.exports = {
  content: ["./src/views/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
        "sm-max": { max: "600px" },
        "md-max": { max: "960px" },
        "lg-max": { max: "1280px" },
        "xl-max": { max: "1920px" },
      },
      zIndex: {
        "-2": "-2",
      },
      spacing: {
        "2x": "calc(200%)",
        "3x": "calc(300%)",
        "4x": "calc(400%)",
        "5x": "calc(500%)",
        "6x": "calc(600%)",
        "7x": "calc(700%)",
      },
      margin: {
        "-1/2": "-50%",
      },
      backgroundSize: {
        120: "17rem",
        185: "46.25rem",
      },
      backgroundImage: {
        "head-top": "url('/src/assets/img/back/head-top.png')",
        "head-top-sm": "url('/src/assets/img/back/head-top-sm.png')",
        "head-eye": "url('/src/assets/img/back/head-eye.png')",
        "head-eye-sm": "url('/src/assets/img/back/head-eye-sm.png')",
        "head-eye-v": "url('/src/assets/img/back/head-eye-v.png')",

        "rect-01": "url('/src/assets/img/rects/rect-01.svg')",
        "rect-02": "url('/src/assets/img/rects/rect-02.svg')",
        "rect-03": "url('/src/assets/img/rects/rect-03.svg')",
      },
      fontSize: {
        xs: [".75rem", "inherit"],
      },
      colors: {
        yellow: "#F8C16C",
        red: "#C62A1F",
      },
      cursor: {
        crosshair: "crosshair",
        "zoom-in": "zoom-in",
      },
    },
    fontFamily: {
      body: ["'Futura PT'"],
    },
  },
  // variants: {
  //   extend: {
  //     borderWidth: ["hover", "focus"],
  //     width: ["first"],
  //     height: ["first"],
  //     position: ["first"],
  //   },
  //   // mixBlendMode: ['hover', 'focus'],
  //   blur: ["hover", "focus"],
  //   // scale: ['active', 'group-hover'],
  //   cursor: ["hover", "focus"],
  // },
};
