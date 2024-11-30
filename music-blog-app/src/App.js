// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import BlogList from './components/BlogList';
// import BlogDetail from './components/BlogDetail';
// import AdminBlogForm from './components/AdminBlogForm';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/blogs" element={<BlogList />} />
//         <Route path="/blog/:id" element={<BlogDetail />} />
//         <Route path="/admin" element={<AdminBlogForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import AdminBlogForm from './components/AdminBlogForm';
import AudioPage from './components/AudioPage';
import BooksPage from './components/BooksPage';
import EventsPage from './components/EventsPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/audios" element={<AudioPage />} />
        <Route path="/books" element={<BooksPage />}  />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/admin" element={<AdminBlogForm />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
