const base = {
    easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    colorWhite: "rgb(255, 255, 255)",
    colorBlack: "rgb(0, 0, 0)"
  };
  
  const dark = {
    id: "dark",
    ...base,
    containerBackgroundColour: "#FF9954",
    backgroundColour: "black",
    textColour: "white",
    navColour: "black",
    mainHeadingColour: "white",
    subHeadingColour: "white",
    navBackgroundColour: "#FF7518"
  };
  
  const light = {
    id: "light",
    ...base,
    containerBackgroundColour: "#FF9954",
    backgroundColour: "white",
    textColour: "black",
    navColour: "white",
    mainHeadingColour: "black",
    subHeadingColour: "black",
    navBackgroundColour: "#FF7518",
  };
  
export const theme = { dark, light };

export const initialState = {
    currentTheme: localStorage.getItem('theme') && JSON.parse(localStorage.getItem('theme')) == "light" ? theme.light : theme.dark
};


export function reducer(state, action) {
    switch(action.type) {
        case "setTheme":
            return {...state, currentTheme: action.value};
        case "updateTheme":
            return {
                ...state,
                currentTheme: { ...theme[state.currentTheme.id], ...action.value }
            };
        case "toggleTheme": {
            const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
            return { ...state, currentTheme: theme[newThemeKey]};
        }
        default:
            throw new Error("problem with toggling theme dark and light.");
    }
}