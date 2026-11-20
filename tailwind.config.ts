import type { Config } from 'tailwindcss'

// Palette taken from the creative-portfolio design reference.
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        choc: '#40231C', // dark chocolate brown
        deep: '#321A15', // deep brown
        butter: '#F5EBA0', // pale butter yellow
        ember: '#FF4B0B', // bright orange
        cream: '#F6F0E5', // warm cream
        ink: '#3A211B', // dark text
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
      },
    },
  },
}
