import "./App.css";
import Nav from "./Nav";
import MainSection from "./MainSection";

function App() {
  return (
    <div className="grid grid-cols-[150px_1fr] h-screen">
      <Nav />
      <MainSection />
    </div>
  );
}

export default App;
