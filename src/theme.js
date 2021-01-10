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
    uiColour: "white",
    mainHeadingColour: "white",
    subHeadingColour: "white",
    uiBackgroundColour: "#FF7518",
    buttonColour: "#DEDEDE"
  };
  
  const light = {
    id: "light",
    ...base,
    containerBackgroundColour: "#FF9954",
    backgroundColour: "white",
    textColour: "black",
    uiColour: "white",
    mainHeadingColour: "black",
    subHeadingColour: "black",
    uiBackgroundColour: "#FF7518",
    buttonColour: "#DEDEDE"
  };
  
export const theme = { dark, light };

export const initialState = {
    currentTheme: localStorage.getItem('theme') && JSON.parse(localStorage.getItem('theme')) == "dark" ? theme.dark : theme.light
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