import React, { PureComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { Theme } from "styles/Theme";
import Mixin from "styles/Mixin";
import Routes from "Routes";
import ErrorBoundary from "utils/ErrorBoundary";
import { getProductJsonData } from "utils/getProductJsonData";

export const ProductsContext = React.createContext(
  [
    {
      id: 1,
      title: "title",
      brand: "brand",
      price: 1,
    },
  ] // 기본값
);

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      allProducts: [],
    };
  }

  componentDidMount() {
    const requestProducts = async () => {
      const productJson = await getProductJsonData();

      const editedProductData = productJson.map((item, idx) => {
        item.id = idx;
        item.disLike = 0;
        item.visitedDate = "";
        return item;
      });

      this.setState({
        allProducts: editedProductData,
      });
    };

    requestProducts();
  }

  render() {
    const { allProducts } = this.state;
    return (
      // <ErrorBoundary>
      <>
        <GlobalStyles />
        <ThemeProvider theme={{ ...Theme, ...Mixin }}>
          <ProductsContext.Provider value={allProducts}>
            <Container>
              <Routes />
            </Container>
          </ProductsContext.Provider>
        </ThemeProvider>
      </>
      // </ErrorBoundary>
    );
  }
}

// App.contextType = ProductsContext;

export default App;

const Container = styled.div`
  width: 500px;
  height: 800px;
  overflow-y: auto;
  margin: 10px auto;
  border: 0.5px solid #c4c4c4;
  background-color: ${({ theme }) => theme.color.background};
`;
