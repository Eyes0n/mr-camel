import React, { Component } from "react";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "styles/Theme";

import Routes from "Routes";
import Mixin from "styles/Mixin";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={{ ...Theme, ...Mixin }}>
          <Routes />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
