import React from "react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
React.useLayoutEffect = React.useEffect 
const Home = () => (
  <>
    <h1 className="second_heading">Home</h1>
    <ul>
      <li key="1">
        <Link to="/first-page">First Page</Link>
      </li>
      <li key="2">
        <Link to="/second-page">Second Page</Link>
      </li>
    </ul>
  </>
);

const FirstPage = () => (
  <>
    <h1 className="second_heading">First Page</h1>
    <Link to="/">Go back Home</Link>
  </>
);

const SecondPage = () => (
  <>
    <h1 className="second_heading">Second Page</h1>
    <Link to="/">Go back Home</Link>
  </>
);

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/first-page" element={<FirstPage/>} />
        <Route exact path="/second-page" element={<SecondPage/>} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;