import "./styles.css";
import { useSelector } from "react-redux";

export default function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <h1>Hello Pandula's CodeSandbox</h1>
      <h2>Start Redux</h2>
    </div>
  );
}
