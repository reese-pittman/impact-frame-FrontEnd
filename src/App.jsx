import { createRoot } from "react-dom/client";
import Landing from "./Landing";
import './App.css';



const App = () => {
  return (
    <div>
      <Landing />
    </div>
  )  
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
