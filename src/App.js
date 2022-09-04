import "./App.css";
import Box from "./components/color";
function App() {
  return (
    <div className = "main-container">
      <div
        style={{
          width: "500px",
          height: "350px",
          backgroundColor: "pink",
        }}
      >
        <h2 style={{ color: "red" }}>Hello</h2>
      </div>
      <Box />
      <div className="third-container">
        <h2>Hello</h2>
      </div>
    </div>
  );
}

export default App;
