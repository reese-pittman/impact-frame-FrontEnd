import react from "react";
import { createRoot } from "react-dom/client";

const Anime = (props) => {
  return react.createElement("div", {}, [
    react.createElement("h1", {}, props.name),
    react.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return react.createElement("div", {}, [
    react.createElement("h1", {}, "Impact Frames"),
    react.createElement(Anime, {
      name: "One Peice",
      description: "A rubber boy going on an adventure to find the one piece",
    }),
    react.createElement(Anime, {
      name: "Bleach",
      description: "Human boy gets soul reaper powers and fights bad guys",
    }),
    react.createElement(Anime, {
      name: "Naruto",
      description:
        "Little boy bullied and then becomes powerfull and beats up bad guys",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(react.createElement(App));
