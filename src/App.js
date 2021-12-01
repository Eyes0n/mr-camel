import React, { PureComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { Theme } from "styles/Theme";
import Mixin from "styles/Mixin";
import Routes from "Routes";
import ProductsContext from "context/ProductsContext";

class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={{ ...Theme, ...Mixin }}>
          <ProductsContext>
            <Container>
              <Routes />
            </Container>
          </ProductsContext>
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
