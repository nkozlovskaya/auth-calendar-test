import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const newLocal: HTMLElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(newLocal);

root.render(<App />);
