import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { main, users, cep, login, insertUser } from "core/routes";
import { useDefineAxiosConfig } from "hooks";
import { Base } from "components/templates";

const App = () => {
  useDefineAxiosConfig();
  const routes = [main, users, cep, login, insertUser];
  return (
    <Router>
      <Routes>
        {routes.map((route, idxRoute) => (
          <Route key={idxRoute} path={route.basePath}>
            {route.paths.map((path, idxPath) => (
              <Route
                key={idxPath}
                path={path.path !== "/" ? path.path : ""}
                element={
                  <Base key={`${idxRoute}|${idxPath}`} page={path.element} />
                }
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default App;
