import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Forms Demo</h1>
        <nav>
          <Link to="/" id="form-link">Basic Form</Link> |{" "}
          <Link to="/ref" id="form-ref-link">Form with useRef</Link> |{" "}
          <Link to="/state" id="form-state-link">Form with useState</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ref" element={<FormRef />} />
          <Route path="/state" element={<FormState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;