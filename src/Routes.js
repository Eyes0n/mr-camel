import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import ProductList from "pages/ProductList";
import ProductDetail from "pages/ProductDetail";
import ProductRecent from "pages/ProductRecent";
import Header from "components/common/Header";

import styled from "styled-components";

class Routes extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Header />
          <Switch>
            <Redirect exact path="/" to="/productlist" />
            <Route path="/productlist" component={ProductList} />
            <Route path="/productdetail" component={ProductDetail} />
            <Route path="/recentlist" component={ProductRecent} />
            <Route path="*" render={() => <Redirect to="/productlist" />} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background};
`;

export default Routes;
