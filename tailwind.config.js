/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-mobile': "url('../src/assets/images/mobile/image-hero.jpg')",
        'banner-desktop': "url('../src/assets/images/desktop/image-hero.jpg')",
        'deep-mobile': "url('../src/assets/images/mobile/image-deep-earth.jpg')",
        'deep-desktop': "url('../src/assets/images/desktop/image-deep-earth.jpg')",
        'night-mobile': "url('../src/assets/images/mobile/image-night-arcade.jpg')",
        'night-desktop': "url('../src/assets/images/desktop/image-night-arcade.jpg')",
        'soccer-mobile': "url('../src/assets/images/mobile/image-soccer-team.jpg')",
        'soccer-desktop': "url('../src/assets/images/desktop/image-soccer-team.jpg')",
        'pocket-mobile': "url('../src/assets/images/mobile/image-pocket-borealis.jpg')",
        'pocket-desktop': "url('../src/assets/images/desktop/image-pocket-borealis.jpg')",
        'grid-mobile': "url('../src/assets/images/mobile/image-grid.jpg')",
        'grid-desktop': "url('../src/assets/images/desktop/image-grid.jpg')",
        'above-mobile': "url('../src/assets/images/mobile/image-from-above.jpg')",
        'above-desktop': "url('../src/assets/images/desktop/image-from-above.jpg')",
        'curiosity-mobile': "url('../src/assets/images/mobile/image-curiosity.jpg')",
        'curiosity-desktop': "url('../src/assets/images/desktop/image-curiosity.jpg')",
        'fisheye-mobile': "url('../src/assets/images/mobile/image-fisheye.jpg')",
        'fisheye-desktop': "url('../src/assets/images/desktop/image-fisheye.jpg')",
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        '4': 'repeat(4, minmax(0, 1fr))',
      }
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'black':'hsl(0, 0%, 0%)',
      'darkgray':'hsl(0, 0%, 55%)',
      'verydarkgray':'hsl(0, 0%, 41%)'
    },
    fontFamily:{
       'alata':['Alata', 'sans-serif'],
       'jose':['Josefin Sans', 'sans-serif']
    },
  },
  plugins: [],
}
