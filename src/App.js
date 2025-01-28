// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
// import Education from './Education/education.tsx';
// import Skills from './Skills/skills.tsx';
// import Projects from './Projects/project.tsx';
// import Certifications from './Certifications/certifications.tsx';
// import Experience from './Experience/experience.tsx';
// import Contact from './Contact/index.tsx';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello, I am Nayna</h1>
//         <img src="/profilephoto.JPG" alt="pro" className="profile-image" />
//         <div className="content-container"
//           style={{
//             backgroundImage: `url("/p2.jpg")`,
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}>
//         <p>A passionate software engineer with expertise in Object-Oriented Programming, Web Development, and DBMS</p>
//         <Router>
//           <nav>
//             <Link to="/contact">Contact</Link><br></br>
//             <Link to="/education">Education</Link><br></br>
//             <Link to="/skills">Skills</Link><br></br>
//             <Link to="/projects">Projects</Link><br></br>
//             <Link to="/experience">Experience</Link><br></br>
//             <Link to="/certifications">Certifications</Link>
//           </nav>
//           <Routes>
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/education" element={<Education />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/certifications" element={<Certifications />} />
//           </Routes>
//         </Router>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Education from './Education/education.tsx';
import Skills from './Skills/skills.tsx';
import Projects from './Projects/project.tsx';
import Certifications from './Certifications/certifications.tsx';
import Experience from './Experience/experience.tsx';
import Contact from './Contact/index.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/profilephoto.JPG" alt="pro" className="profile-image" />
          <h1>Hello, I am Nayna</h1>
          <p>A passionate software engineer with expertise in Object-Oriented Programming, Web Development, and DBMS</p>
          <nav>
            <Link to="/contact">Contact</Link><br />
            <Link to="/education">Education</Link><br />
            <Link to="/skills">Skills</Link><br />
            <Link to="/projects">Projects</Link><br />
            <Link to="/experience">Experience</Link><br />
            <Link to="/certifications">Certifications</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Navigate to="/contact" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

