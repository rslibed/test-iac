import "./App.scss";

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-switch";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/instant-apps-components/dist/components/instant-apps-header";
import "@esri/instant-apps-components/dist/components/instant-apps-export";
import "@arcgis/map-components/dist/components/arcgis-map";

import { ArcgisMap } from "@arcgis/map-components-react";
import {
  CalciteShell,
  CalciteShellPanel,
} from "@esri/calcite-components-react";
import {
  InstantAppsExport,
  InstantAppsHeader,
} from "@esri/instant-apps-components-react";
import { useState } from "react";

function App() {
  const [view, setView] = useState<__esri.MapView | null>(null);
  return (
    <CalciteShell>
      <InstantAppsHeader
        id="instant-apps-header"
        slot="header"
        titleText="Instant Apps Components: Export"
        textColor="#fff"
        backgroundColor="#151515"
        logoImage="https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/arcgis-instant-apps-64.svg"
        logoImageAltText="ArcGIS Instant Apps logo"
        logoLink="https://www.esri.com/en-us/arcgis/products/arcgis-instant-apps/overview"
      />
      <CalciteShellPanel slot="panel-start">
        <InstantAppsExport mode="inline" view={view as __esri.MapView} />
      </CalciteShellPanel>
      <ArcgisMap
        onArcgisViewReadyChange={(e) => setView(e.target.view)}
        itemId="05e015c5f0314db9a487a9b46cb37eca"
      />
    </CalciteShell>
  );
}

export default App;
