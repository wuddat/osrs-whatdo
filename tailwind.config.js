// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        runescape: ['RuneScape', 'sans-serif'],
        'runescape-small': ['RuneScape Small', 'sans-serif'],
        'runescape-bold': ['RuneScape Bold', 'sans-serif'],
      },
      colors: {
        osrs: {
          bg: '#201C1B',
          panel: '#2A2624',
          border: '#3A352F',
          text: '#D4C49D',
          accent: '#D2A800',
          positive: '#00FF00',
          negative: '#FF3333',
          magic: '#66B3FF',
          warning: '#FFB347',
        },
      },
      spacing: {
        'osrs-xs': '0.25rem',
        'osrs-sm': '0.5rem',
        'osrs-md': '1rem',
        'osrs-lg': '1.5rem',
        'osrs-xl': '2rem',
        'osrs-2xl': '3rem',
      },
      boxShadow: {
        osrs: '0 2px 6px rgba(0, 0, 0, 0.5)',
      },
    },
  },
};
