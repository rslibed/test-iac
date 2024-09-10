import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@esri/calcite-components";
import App from "./App.tsx";
import "./index.scss";

import { setAssetPath } from "@esri/calcite-components/dist/components";
import { setAssetPath as setAssetPathForIAC } from "@esri/instant-apps-components/dist/components";

const url = `${window.location.href}widgets/instant-app-export-sample/dist/runtime/instant-apps-component/assets`;
const { href } = new URL(url);

setAssetPath(href);
setAssetPathForIAC(href);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
