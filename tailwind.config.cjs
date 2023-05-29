/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Lato'],
      },
      colors: {
        darkbg: "#000428",
        lightbg: "#004e92",
        cyan5: "rgb(6 182 212)",
        cyan6: "rgb(8 145 178)",
        slate5: "rgb(100 116 139)",
        slate6: "rgb(71 85 105)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}


{/* <button className='mr-4 px-3 py-0.5 text-sm font-medium bg-cyan5 border-0 rounded-sm hover:bg-cyan6'>Create Project</button> */}
{/* <button className='px-3 py-0.5 text-sm font-medium bg-slate6 border-0 rounded-sm hover:bg-slate5'>Explore Bounties</button> */}
