import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { Theme } from "styles/Theme";
import Mixin from "styles/Mixin";
import Routes from "Routes";
import ErrorBoundary from "utils/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <GlobalStyles />
        <ThemeProvider theme={{ ...Theme, ...Mixin }}>
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </ErrorBoundary>
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
