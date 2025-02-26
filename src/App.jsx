import { createRoot } from "react-dom/client";
import Anime from "./Anime";

const App = () => {
  return (
    <div>
      <h1>Impact Frame - Watch Now </h1>
      <Anime name="One Peice" description="A rubber boy pirate fiting peop"/>
      <Anime name="Bleach" description="Soul reaper high schooler fights people"/>
      <Anime name="Naruto" description="Little boy gets powerful fox"/>
    </div>
  )  
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
