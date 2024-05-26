/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        main: "#6172F3",
        sidebar: "#99a799",
        sidebara: "#d3e4cd",
        primaryColor: "#000",
        secondColor: "#fff",
        paidColor:"#A2FF86",
        dueColor:"#FFA27F"
      },
      boxShadow: {
        c: "0 0px 100px 40px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      backgroundColor: {
        overlay: "rgba(0,0,0,0.7)",
        overlay_white: "rgba(255,255,255,0.7)",
      },
      boxShadow: {
        table: "0px 2px 50px 0px rgba(0, 0, 0, 0.08)",
        table_1: "0px 3px 50px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
