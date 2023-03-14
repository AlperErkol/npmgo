import { useState, useEffect, createContext } from "react";


const getInitialTheme = _ =>{

	if(window.localStorage && window.localStorage.getItem('color-theme')){

		if(window.localStorage.getItem('color-theme') === 'dark'){
			return 'dark';
		}
		else if(window.localStorage.getItem('color-theme') === 'light'){
			return 'light';
		}

	}

	if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')){
		return 'dark';
	}
	return 'dark';
};

const applyTheme = theme =>{

	const root = document.documentElement;


	if(theme === 'dark'){

		if(root.classList.contains('light')){
			root.classList.remove('light');
		}

		root.classList.add(theme);
		localStorage.setItem('color-theme', theme);

	}else if(theme === 'light'){

		if(root.classList.contains('dark')){
			root.classList.remove('dark');
		}

		root.classList.add(theme);
		localStorage.setItem('color-theme', theme);

	}

};

export const ThemeContext = createContext();





export const ThemeProvider = props =>{

	const [colorTheme, setColorTheme] = useState(getInitialTheme);


	useEffect(() => {
		applyTheme(colorTheme);
	}, [colorTheme]);





	return(
		<ThemeContext.Provider value={[colorTheme, setColorTheme]}>
			{props.children}
		</ThemeContext.Provider>
	);

};
