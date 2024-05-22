// // src/components/AdminBlogForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function AdminBlogForm() {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [thumbnail, setThumbnail] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('content', content);
//         if (thumbnail) {
//             formData.append('thumbnail', thumbnail);
//         }

//         // Include auth credentials in your axios request
//         axios.post('http://127.0.0.1:8000/blog/posts/', formData, {
//             withCredentials: true,
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             },
//             auth: {
//                 username: 'hp',  // Replace with actual username
//                 password: 'admin'   // Replace with actual password
//             }
//         }).then(response => {
//             alert('Post created successfully');
//         }).catch(error => {
//             console.error('Error creating post:', error.response.data);
//             alert('Error creating post: ' + JSON.stringify(error.response.data));
//         });


//         for (let [key, value] of formData.entries()) {
//             console.log(`${key}: ${value}`);
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Write more about this new blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="thumbnail">Blog Thumbnail:</label>
//                     <input
//                         type="file"
//                         onChange={e => setThumbnail(e.target.files[0])}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="title">Blog Title:</label>
//                     <input
//                         type="text"
//                         id="title"
//                         value={title}
//                         onChange={e => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="content">More details:</label>
//                     <textarea
//                         id="content"
//                         value={content}
//                         onChange={e => setContent(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Upload Blog</button>
//             </form>
//         </div>
//     );
// }

// export default AdminBlogForm;



import React, { useState } from 'react';
import axios from 'axios';
import './AdminBlogForm.css';
import Header from './Header';

function AdminBlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }

    axios.post('http://127.0.0.1:8000/blog/posts/', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      auth: {
        username: 'hp',  // Replace with actual username
        password: 'admin'   // Replace with actual password
      }
    }).then(response => {
      alert('Post created successfully');
    }).catch(error => {
      console.error('Error creating post:', error.response.data);
      alert('Error creating post: ' + JSON.stringify(error.response.data));
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <>
    <Header />
    <div className="admin-blog-form-container">
      <h2>Write more about this new blog</h2>
      <form onSubmit={handleSubmit} className="admin-blog-form">
        <div className="form-group">
          <label htmlFor="thumbnail">Blog Thumbnail:</label>
          <input
            type="file"
            id="thumbnail"
            className="form-control"
            onChange={e => setThumbnail(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Blog Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">More details:</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Upload Blog</button>
      </form>
    </div>
    </>
    
  );
}

export default AdminBlogForm;
