import { createRoot } from 'react-dom/client';
import Card from "./Card";
import "./style.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Card tab="home" />);