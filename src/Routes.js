import React, { Suspense, lazy } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

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
            <Switch>
              <Route
                exact
                path="/"
                component={lazy(() => import("src/views/Home"))}
              />
              <Redirect to="/404" />
            </Switch>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
