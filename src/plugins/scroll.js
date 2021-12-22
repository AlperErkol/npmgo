const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(()=>{

    return function({addUtilities}){
        addUtilities({
            '.no-scroll' : {'-ms-overflow-style': 'none','scrollbar-width': 'none'}
        })
    }

})