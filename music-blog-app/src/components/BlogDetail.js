// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Header from './Header';
// import './BlogDetail.css';
// import axios from 'axios';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [showFullContent, setShowFullContent] = useState(false);

//   useEffect(() => {
//     fetchBlogDetails();
//     fetchComments();
//   }, [id]);

//   const fetchBlogDetails = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/blog/posts/${id}/`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setBlog(data);
//     } catch (error) {
//       console.error('Error fetching blog details:', error);
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/blog/posts/${id}/comments/`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setComments(data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   const handleReadMore = () => {
//     setShowFullContent(true);
//   };

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://127.0.0.1:8000/blog/posts/${id}/comments/`,
//         { content: newComment },
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           auth: {
//             username: 'hp',  // Replace with actual username
//             password: 'admin'  // Replace with actual password
//           }
//         }
//       );
//       setComments([...comments, response.data]);
//       setNewComment('');
//     } catch (error) {
//       console.error('Error posting comment:', error);
//       alert('Error posting comment: ' + JSON.stringify(error.response.data));
//     }
//   };

//   if (!blog) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <Header />
//       <div className="blogDetailContainer">
//         <div className="blogDetailImageContainer">
//           {blog.thumbnail && (
//             <img src={blog.thumbnail} alt={blog.title} className="blogDetailImage" />
//           )}
//         </div>
//         <div className="blogDetailContent">
//           <h1 className="blogDetailTitle">{blog.title}</h1>
//           <p className="blogDetailDate">{new Date(blog.created_at).toLocaleDateString()}</p>
//           <p className="blogDetailExcerpt">{showFullContent ? blog.content : `${blog.content.substring(0, 150)}...`}</p>
//           {!showFullContent && (
//             <button onClick={handleReadMore} className="readMoreButton">Read more</button>
//           )}
//           {showFullContent && (
//             <p className="blogDetailText" dangerouslySetInnerHTML={{ __html: blog.content }} />
//           )}
//         </div>
//         <div className="commentsSection">
//           <h2>Comments</h2>
//           {comments.map((comment) => (
//             <div key={comment.id} className="comment">
//               <p className="commentAuthor">{comment.author.username}</p>
//               <p className="commentContent">{comment.content}</p>
//               <p className="commentDate">{new Date(comment.created_at).toLocaleDateString()}</p>
//             </div>
//           ))}
//           <form onSubmit={handleCommentSubmit} className="commentForm">
//             <textarea
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               placeholder="Write a comment..."
//               required
//             />
//             <button type="submit" className="submitCommentButton">Submit Comment</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import './BlogDetail.css';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    fetchBlogDetails();
    fetchComments();
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/blog/posts/${id}/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/blog/posts/${id}/comments/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleReadMore = () => {
    setShowFullContent(true);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/blog/posts/${id}/comments/`,
        { content: newComment },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: 'vic',  // Replace with actual username
            password: 'mynewpassword2024'  // Replace with actual password
          }
        }
      );
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Error posting comment: ' + JSON.stringify(error.response.data));
    }
  };

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="blogDetailContainer">
        <div className="blogDetailImageContainer">
          {blog.thumbnail && (
            <img src={blog.thumbnail} alt={blog.title} className="blogDetailImage" />
          )}
        </div>
        <div className="blogDetailContent">
          <h1 className="blogDetailTitle">{blog.title}</h1>
          <p className="blogDetailDate">{new Date(blog.created_at).toLocaleDateString()}</p>
          <p className="blogDetailExcerpt">{showFullContent ? blog.content : `${blog.content.substring(0, 150)}...`}</p>
          {!showFullContent && (
            <button onClick={handleReadMore} className="readMoreButton">Read more</button>
          )}
          {showFullContent && (
            <p className="blogDetailText" dangerouslySetInnerHTML={{ __html: blog.content }} />
          )}
        </div>
        <div className="commentsSection">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p className="commentAuthor">{comment.author_username}</p>
              <p className="commentContent">{comment.content}</p>
              <p className="commentDate">{new Date(comment.created_at).toLocaleDateString()}</p>
            </div>
          ))}
          <form onSubmit={handleCommentSubmit} className="commentForm">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              required
            />
            <button type="submit" className="submitCommentButton">Submit Comment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
