import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import React from "react";
import Up_top from "./components/Up-to-top/Up-to-top";
import { Toaster } from "react-hot-toast";
import PreventImageDragAndRightClick from "./utils/PreventImageDragAndRightClick";
import "aos/dist/aos.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <React.Fragment>
        <PreventImageDragAndRightClick />
        <Up_top />
        <RouterProvider router={routes} />
        <Toaster position="top-center" reverseOrder={false} />
    </React.Fragment>
  );
}

export default App;
