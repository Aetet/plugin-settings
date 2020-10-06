import React from "react";
import { Lite } from "./applications/Lite";
import { Hard } from "./applications/Hard";
import { Medium } from "./applications/Medium";
const allRegisteredPluginsThatWeHave = ["Presentation", "Audio", "Video"];
function App() {
  // return <Lite plugins={allRegisteredPluginsThatWeHave} />;
  // return <Medium plugins={allRegisteredPluginsThatWeHave} />;
  return <Hard plugins={allRegisteredPluginsThatWeHave} />;
}

export default App;
