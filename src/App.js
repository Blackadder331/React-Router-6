import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
        <NavLink to="/projects" style={style}>
          Projects
        </NavLink>
        <NavLink to="/contact" style={style}>
          Contact
        </NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const About = () => {
  return (
    <>
      <h2>About</h2>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
    </>
  );
};

export default App;