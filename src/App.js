import React, { Component } from "react";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "styles/Theme";

import Routes from "Routes";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={Theme}>
          <Routes />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
