import Navbar from "./components/Navbar";
import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";

function App() {
  return (
    <div className="bg-[#0b1220] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {/* LEFT */}
        <SessionForm />

        {/* RIGHT */}
        <div className="md:col-span-2">
          <SessionList />
        </div>
      </div>
    </div>
  );
}

export default App;
