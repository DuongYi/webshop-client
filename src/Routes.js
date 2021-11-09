import React, { Suspense, lazy } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Header from 'src/components/Header';
import LoadingScreen from "src/components/LoadingScreen";

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route
          exact
          path="/login"
          component={lazy(() => import("./views/auth/Login"))}
        />
        <Route
          exact
          path="/register"
          component={lazy(() => import("./views/auth/Register"))}
        />
        <Route
          exact
          path="/404"
          component={lazy(() => import("src/views/pages/Error404View"))}
        />
        <Route
          path="*"
          render={() => (
            <Header>
              <Switch>
                <Route
                  exact
                  path="/sp1"
                  component={lazy(() => import("src/views/Test/ProductView1"))}
                />
                <Route
                  exact
                  path="/sp2"
                  component={lazy(() => import("src/views/Test/ProductView2"))}
                />
                <Route
                  exact
                  path="/sp3"
                  component={lazy(() => import("src/views/Test/ProductView3"))}
                />
                <Route
                  exact
                  path="/sp4"
                  component={lazy(() => import("src/views/Test/ProductView4"))}
                />
                <Route
                  exact
                  path="/sp"
                  component={lazy(() => import("src/views/ProductView"))}
                />
                <Route
                  exact
                  path="/allsp"
                  component={lazy(() => import("src/views/AllProductView"))}
                />
                <Route
                  exact
                  path="/home"
                  component={lazy(() => import("src/views/Home"))}
                />
                <Route
                  exact
                  path="/"
                  component={lazy(() => import("src/views/Home"))}
                />
                <Redirect to="/404" />
              </Switch>
            </Header>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
