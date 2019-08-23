import React from "react";
import { Tab } from "semantic-ui-react";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodeList";
// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/

const panes = [
  {
    menuItem: "Home Page",
    render: () => (
      <Tab.Pane>
        <WelcomePage />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Characters",
    render: () => (
      <Tab.Pane>
        <CharacterList />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Locations",
    render: () => (
      <Tab.Pane>
        <LocationsList />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Episodes",
    render: () => (
      <Tab.Pane>
        <EpisodesList />
      </Tab.Pane>
    )
  }
];

export default function TabNav() {
  return <Tab panes={panes} />;
}
