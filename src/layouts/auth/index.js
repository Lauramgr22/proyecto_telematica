import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
import { useContext } from "react"
import { StoreContext } from "store/StoreProvider";
import { types } from "store/storeReducer";
// Chakra imports
import { Box, useColorModeValue } from "@chakra-ui/react";

// Layout components
import { AuthProvider } from "contexts/SidebarContext";

// Custom Chakra theme
export default function Auth() {
  // states and functions
  const [toggleSidebar, setToggleSidebar] = useState(false);
  //estado global
  const [store, dispatch] = useContext(StoreContext)
  const { user, dispositivos } = store;
  console.log(dispositivos);
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/auth/full-screen-maps";
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      if (prop.collapse) {
        return getRoutes(prop.items);
      }
      if (prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };
  const authBg = useColorModeValue("white", "navy.900");
  document.documentElement.dir = "ltr";
  return (
    <Box>
      <AuthProvider.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}>
        <Box
          bg={authBg}
          float='right'
          minHeight='100vh'
          height='100%'
          position='relative'
          w='100%'
          transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration='.2s, .2s, .35s'
          transitionProperty='top, bottom, width'
          transitionTimingFunction='linear, linear, ease'>
          {getRoute() ? (
            <Box mx='auto' minH='100vh'>
              <Switch>
                {getRoutes(routes)}
                <Redirect
                  from='/auth'
                  to='/auth/sign-in/default'
                />
              </Switch>
            </Box>
          ) : null}
        </Box>
      </AuthProvider.Provider>
    </Box>
  );
}
