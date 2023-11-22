import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./components/Posts/store/store.ts";
import PagesRoutes from "./components/PagesRoutes/PagesRoutes.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <PagesRoutes />
    </BrowserRouter>
  </Provider>
);
