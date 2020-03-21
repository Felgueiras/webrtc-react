import React from "react";
import Setup from "../scenes/setup/Setup.tsx";
import SetupScene from "../scenes/setup/SetupScene";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

export default {
  title: "Setup",
  decorators: [
    storyFn => (
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <Route path="/" component={() => storyFn()} />
      </Router>
    )
  ]
};

const connectToServer = (event, id) => {
  event.preventDefault();
  debugger;
  console.log(id);
};

export const SetUpScene = () => <SetupScene />;

export const SetUp = () => <Setup connectToServer={connectToServer} />;
