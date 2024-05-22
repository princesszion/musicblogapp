// import React, { useEffect, useState } from 'react';
// import './BlogList.css'; // Ensure this file is created and styled correctly
// import { Link } from 'react-router-dom';

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/blog/posts/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Fetched blog data:', data); // Debugging line
//         setBlogs(data);
//       })
//       .catch(error => console.error('Error fetching blogs:', error));
//   }, []);

//   return (
//     <div className="blogPageContainer">
//       <h1>Manage Blogs</h1>
//       <div className="blogsList">
//         {blogs.length > 0 ? (
//           blogs.map(blog => (
//             <div key={blog.id} className="blogCard">
//               <Link to={`/blog/${blog.id}`}>
//                 {blog.thumbnail ? (
//                   <img src={blog.thumbnail} alt={blog.title} className="blogImage" />
//                 ) : (
//                   <div className="placeholderImage">No Image</div>
//                 )}
//                 <h2 className="blogTitle">{blog.title}</h2>
//                 <p className="blogExcerpt">{blog.content.substring(0, 100)}...</p>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p>No blogs available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


// BlogPage.js
import React, { useEffect, useState } from 'react';
import './BlogList.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/blog/posts/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched blog data:', data);
        setBlogs(data);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="blogPageContainer">
        <div className="blogsList">
        <div className="blogheroSection">
          <h1 className="blogheroTitle">MY STORIES</h1>
        </div>
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <div key={blog.id} className="blogCard">
                <Link to={`/blog/${blog.id}`}>
                  {blog.thumbnail ? (
                    <img src={blog.thumbnail} alt={blog.title} className="blogImage" />
                  ) : (
                    <div className="placeholderImage">No Image</div>
                  )}
                  <h2 className="blogTitle">{blog.title}</h2>
                  <p className="blogExcerpt">{blog.content.substring(0, 100)}...</p>
                </Link>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;

