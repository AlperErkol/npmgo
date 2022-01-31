module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      default: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        text: 'var(--color-text-primary)',
        muted : 'var(--color-text-muted)',
        success : 'var(--color-text-success)',
        errorArea : 'var(--color-bg-error)',
        errorText : 'var(--color-text-error)',
        inputColor : 'var(--color-bg-input)',
        sidebarColor : 'var(--color-bg-sidebar)',
        whitely : 'var(--color-text-whitely)',
        buttonHover : 'var(--color-hover-button)',
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
