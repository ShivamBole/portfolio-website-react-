// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     fontFamily: {
//       primary: 'Orbitron',
//       secondary: 'Rajdhani',
//       tertiary: 'Aldrich',
//     },
//     container: {
//       padding: {
//         DEFAULT: '15px',
//       },
//     },
//     screens: {
//       sm: '640px',
//       md: '768px',
//       lg: '960px',
//       xl: '1200px',
//     },
//     extend: {
//       colors: {
//         primary: '#0a0a0a',
//         accent: '#B809C3',
//       },
//       backgroundImage: {
//         site: "url('./assets/site-bg.jpg')",
//         about: "url('./assets/about.png')",
//         services: "url('./assets/services.png')",
//       },
//     },
//   },
//   plugins: [],
// };





module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        marsRed: '#ff2f92',
        marsPurple: '#7b2cff',
        marsBlue: '#3bace2',
      },
       animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        /* MAIN SITE BACKGROUND — Mars Power Gradient */
        site: `
          radial-gradient(circle at 20% 20%, rgba(255, 47, 146, 0.45) 0%, transparent 40%),
    radial-gradient(circle at 80% 30%, rgba(185, 54, 238, 0.45) 0%, transparent 35%),
    radial-gradient(circle at 50% 80%, rgba(59, 172, 226, 0.45) 0%, transparent 30%),
    linear-gradient(
      135deg,
      #9e788a 0%,
      #b936ee 35%,
      #1086be 70%,
      #406aff 100%
    )
        `,
        cosmo: "url('./assets/site-bg.jpg')",  
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },

    },
  },
  plugins: [],
};
