import React, { Component } from "react";
import styled from "styled-components";
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
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;

const Container = styled.div`
  width: 500px;
  height: 800px;
  overflow-y: auto;
  margin: 10px auto;
  border: 0.5px solid #c4c4c4;
  background-color: ${({ theme }) => theme.color.background};
`;
