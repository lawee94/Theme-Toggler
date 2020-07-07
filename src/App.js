import React, { useState } from 'react';

function App() {
  const [ theme, setTheme] = useState(Color.dark)
  return (
    <div style={theme}>
        <h1>Theme Toggler</h1>
        <p>This application is built for mainly toggling theme either in dark mode of ligth mode</p>
        <button onClick={() => 
          setTheme(theme.color === "#000" ? Color.dark : Color.light )}
          >Toggle Theme
        </button>
    </div>
  );
}

const style = {
  textAlign: "center",
  height: "94vh",
  padding: "50px"
}

const Color = {
  dark: {
    backgroundColor: "#000",
    color: "#fff",
    ...style
  },
  light: {
    backgroundColor: "#fff",
    color: "#000",
    ...style
  }
}

export default App;
