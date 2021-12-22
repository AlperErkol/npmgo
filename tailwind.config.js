
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      default: {
        primary: '#212121',
        secondary: '#08fdd8',
        tertiary: '#FD2155',
        text: '#fff',
        muted : '#919191',
        success : '#4BB543',
        error : '#F8D7DA',
        errorText : '#8F444B',
        inputColor : '#363636',
        sidebarColor : '#161616',
        whitely : '#EBDFCA',
      },
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('./src/plugins/scroll')
  ],
}
