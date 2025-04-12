import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-3 bg-[#1e293b] text-white">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
