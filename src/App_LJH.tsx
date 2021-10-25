import "./App.css";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSnb from "./AppSnb";

function App() {
  return (
    <div className="App">
      <AppSnb />
      <div className="MainArea">
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
