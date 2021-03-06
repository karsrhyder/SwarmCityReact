import React, { useState } from "react";

// Sub-pages
import MapView from "./pages/MapView";

const mapViewId = "mapViewId";

function RideShareRoot() {
  const [stage, setStage] = useState(mapViewId);

  switch (stage) {
    case mapViewId:
      return <MapView />;
    default:
      return <h1>Ops</h1>;
  }
}

export default RideShareRoot;
