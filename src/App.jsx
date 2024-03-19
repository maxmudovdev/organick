import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import { nanoid } from "nanoid";
import { main_routers } from "./router/main-router";
import ShopSingle from "./Pages/ShopSingle/ShopSingle";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_routers.map((route) => (
            <Route
              index={route.path ? false : true}
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="*" element={<PageNotFound />} />
          <Route path="shop-single/:id" element={<ShopSingle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
