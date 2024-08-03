import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'
import { store } from "./redux/store";
import UnloadPrompt from "./utils/UnloadPrompt";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UnloadPrompt />
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </Provider>
  </React.StrictMode>
);