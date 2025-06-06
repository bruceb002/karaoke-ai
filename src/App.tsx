import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PracticePage from "./pages/PracticePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">Karaoke AI</h1>
          <nav className="mt-2">
            <Link to="/practice" className="text-blue-500 hover:underline">
              Practice Mode
            </Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/practice" element={<PracticePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
