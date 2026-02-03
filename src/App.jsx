import "./App.css";
import Rasm from "./assets/rasm.webp";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div>
        <img src={Rasm} width={200} alt="rasm" />
        <h1>Muhammad</h1>
        <Welcome lang={"React JS"} />
        <Welcome lang={"Python"} />
        <Welcome lang={"C++"} />
      </div>
    </>
  );
}

export default App;