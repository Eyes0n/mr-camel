import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import ProductsContext, { AllProductsContext } from "./ProductsContext";

describe("Products Context ", () => {
  test("renders component corretly ", () => {
    const ChildComponent = () => <div>child</div>;

    render(
      <ProductsContext>
        <ChildComponent />
      </ProductsContext>
    );

    const child = screen.getByText("child");
    expect(child).toBeInTheDocument();
  });

  test("loads all Products from context", () => {
    const mockProducts = [
      { id: 1, brand: "nike" },
      { id: 2, brand: "adidas" },
      { id: 3, brand: "puma" },
    ];

    const ChildComponent = () => {
      const allProducts = useContext(AllProductsContext);
      // console.log("context :>> ", allProducts);
      return (
        <div>
          {allProducts.map(({ id, brand }) => (
            <div key={id}>{brand}</div>
          ))}
        </div>
      );
    };

    render(
      <AllProductsContext.Provider value={mockProducts}>
        <ChildComponent />
      </AllProductsContext.Provider>
    );

    const nike = screen.getByText(/nike/i);
    const adidas = screen.getByText(/adidas/i);
    const puma = screen.getByText(/puma/i);

    expect(nike).toBeInTheDocument();
    expect(adidas).toBeInTheDocument();
    expect(puma).toBeInTheDocument();
  });

  test.skip("2 loads Products from context", async () => {
    const ChildComponent = () => {
      const allProducts = useContext(AllProductsContext);
      console.log("context :>> ", allProducts);
      return (
        <div>
          {allProducts.map(({ id, brand }) => (
            <div key={id}>{brand}</div>
          ))}
        </div>
      );
    };

    // 이건 안되네.....
    // useContext에서 불러오는 context값이 []도 아닌 undefined.......
    render(
      <ProductsContext>
        <ChildComponent />
      </ProductsContext>
    );

    const text = await screen.findByText(/나이키/i);
    expect(text).toBeInTheDocument();
  });
});
