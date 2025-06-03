// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       colors: {
        white: '#ffffff',
        black: '#000000',
        bggray: '#F7F4F3',
        primary: '#E4A425',
        
      },
      fontWeight: {
        primary: '400',
        secondary: '500',
      },
      fontFamily: {
        outfitRegular: ['Outfit-Regular', 'sans-serif'],
        outfitMedium: ['Outfit-Medium', 'sans-serif'],
        outfitSemiBold: ['Outfit-SemiBold', 'sans-serif'],
        outfitBold: ['Outfit-Bold', 'sans-serif'],
        outfitExtraBold: ['Outfit-ExtraBold', 'sans-serif'],
        outfitBlack: ['Outfit-Black', 'sans-serif'],
        outfitLight: ['Outfit-Light', 'sans-serif'],
        outfitExtraLight: ['Outfit-ExtraLight', 'sans-serif'],
        outfitThin: ['Outfit-Thin', 'sans-serif'],
        outfitItalic: ['Outfit-Italic', 'sans-serif'],
        outfitMediumItalic: ['Outfit-MediumItalic', 'sans-serif'],
        outfitBoldItalic: ['Outfit-BoldItalic', 'sans-serif'],
        outfitSemiBoldItalic: ['Outfit-SemiBoldItalic', 'sans-serif'],
        outfitExtraBoldItalic: ['Outfit-ExtraBoldItalic', 'sans-serif'],
        outfitBlackItalic: ['Outfit-BlackItalic', 'sans-serif'],
        outfitExtraLightItalic: ['Outfit-ExtraLightItalic', 'sans-serif'],
        outfitLightItalic: ['Outfit-LightItalic', 'sans-serif'],
        outfitThinItalic: ['Outfit-ThinItalic', 'sans-serif'],

        // Short aliases
        sans: ['Outfit-Regular', 'sans-serif'],
        outfit: ['Outfit-Regular', 'sans-serif'],
        regular: ['Outfit-Regular', 'sans-serif'],
        medium: ['Outfit-Medium', 'sans-serif'],
        semibold: ['Outfit-SemiBold', 'sans-serif'],
        bold: ['Outfit-Bold', 'sans-serif'],
        extrabold: ['Outfit-ExtraBold', 'sans-serif'],
        black: ['Outfit-Black', 'sans-serif'],
        light: ['Outfit-Light', 'sans-serif'],
        extralight: ['Outfit-ExtraLight', 'sans-serif'],
        thin: ['Outfit-Thin', 'sans-serif'],
        italic: ['Outfit-Italic', 'sans-serif'],
      },
   
      keyframes: {
        rotatePulse: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(180deg) scale(1.2)', opacity: '0.7' },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: '1' },
        },
      },
      animation: {
        'rotate-pulse': 'rotatePulse 2s linear infinite',
      },
    },
  },
  plugins: [],
}
