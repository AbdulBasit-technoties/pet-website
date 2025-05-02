const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
                heading: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                c1: 'rgba(63, 155, 12, 1)',     
                c2: 'rgba(209, 229, 8, 1)',     
                c3: 'rgba(113, 113, 113, 1)',    
                c4: 'rgba(255, 255, 255, 1)',     
                custbg: 'rgba(246, 244, 244, 1)',   
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
