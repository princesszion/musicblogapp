// import React from 'react';
// import './BooksPage.css';
// import Header from './Header';

// const booksData = [
//   {
//     id: 1,
//     title: 'THE MANTLE OF TRUE WORSHIP',
//     thumbnail: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww',
//     description: '"The Mantle of True Worship" delves into the depths of genuine worship, exploring its transformative power and role in connecting individuals with their divine purpose. As an author deeply passionate about this subject, I have poured my heart and soul into writing a book that will inspire the next generation of kingdom pacesetters into parkers of kingdom inheritance through worship.',
//     // preorder_link: 'https://example.com/preorder/1',
//     retailers: [
//       { name: 'Amazon', link: 'https://www.amazon.com', logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png' },
//     ]
//   },
// //   {
// //     id: 2,
// //     title: 'Are You Praying For The Wrong Thing?',
// //     thumbnail: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
// //     description: 'It’s a book about you. Often times we’re not waiting on God...',
// //     // preorder_link: 'https://example.com/preorder/2',
// //     retailers: [
// //       { name: 'Amazon', link: 'https://www.amazon.com', logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png' },
// //     ]
// //   },
// //   {
// //     id: 3,
// //     title: 'Are You Praying For The Wrong Thing?',
// //     thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2t8ZW58MHx8MHx8fDA%3D',
// //     description: 'It’s a book about you. Often times we’re not waiting on God...',
// //     // preorder_link: 'https://example.com/preorder/3',
// //     retailers: [
// //       { name: 'Amazon', link: 'https://www.amazon.com', logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png' },
// //     ]
// //   },
//   // Add more books here as needed
// ];

// const BooksPage = () => {
//   return (
//     <>
//       <Header />
//       <div className="booksPageContainer">
//         <div className="booksheroSection">
//           <h1 className="heroTitle">BOOKS</h1>
//         </div>
//         {booksData.length === 1 ? (
//           <div className="singleBookContainer">
//             <div className="singleBookContent">
//               <div className="singleBookImage">
//                 <img src={booksData[0].thumbnail} alt={booksData[0].title} />
//               </div>
//               <div className="singleBookDetails">
//                 <h2 className="bookTitle">{booksData[0].title}</h2>
//                 <p className="bookDescription">{booksData[0].description}</p>
//                 <div className="retailersSection">
//                   {booksData[0].retailers.map(retailer => (
//                     <a key={retailer.name} href={retailer.link} target="_blank" rel="noopener noreferrer">
//                       <img src={retailer.logo} alt={retailer.name} className="retailerLogo" />
//                     </a>
//                   ))}
//                 </div>
//                 <a href={booksData[0].preorder_link} className="preorderButton" target="_blank" rel="noopener noreferrer">
//                   Preorder Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="booksGrid">
//             {booksData.map(book => (
//               <div key={book.id} className="bookCard">
//                 <img src={book.thumbnail} alt={book.title} className="bookImage" />
//                 <h2 className="bookTitle">{book.title}</h2>
//                 <p className="bookDescription">{book.description}</p>
//                 <div className="retailersSection">
//                   {book.retailers.map(retailer => (
//                     <a key={retailer.name} href={retailer.link} target="_blank" rel="noopener noreferrer">
//                       <img src={retailer.logo} alt={retailer.name} className="retailerLogo" />
//                     </a>
//                   ))}
//                 </div>
//                 <a href={book.preorder_link} className="preorderButton" target="_blank" rel="noopener noreferrer">
//                   Preorder Now
//                 </a>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BooksPage;


import React from 'react';
import './BooksPage.css';
import Header from './Header';
import motw from '../assets/images/motw.png'

const booksData = [
  {
    id: 1,
    title: 'THE MANTLE OF TRUE WORSHIP',
    thumbnail: motw,
    description: '"The Mantle of True Worship" delves into the depths of genuine worship, exploring its transformative power and role in connecting individuals with their divine purpose. As an author deeply passionate about this subject, I have poured my heart and soul into writing a book that will inspire the next generation of kingdom pacesetters into parkers of kingdom inheritance through worship.The book is centered around building a path to the mysteries of supernatural increase while sharing my experiential knowledge to ignite a revival. But more importantly, the book ended with a comprehensive Bible Study guide that will help Christendom in redefining worship. The Mantle of True Worship should be a must-read, and it will help change the lens through which we see worship in this generation and generations beyond.',
    preorder_link: 'https://example.com/preorder/1',
    retailers: [
      { name: 'Amazon', link: 'https://www.amazon.com', logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png' },
    ]
  },
//   {
//     id: 2,
//     title: 'Are You Praying For The Wrong Thing?',
//     thumbnail: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
//     description: 'It’s a book about you. Often times we’re not waiting on God...',
//     preorder_link: 'https://example.com/preorder/2',
//     retailers: [
//       { name: 'Amazon', link: 'https://www.amazon.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png' },
//     ]
//   },
//   {
//     id: 3,
//     title: 'Are You Praying For The Wrong Thing?',
//     thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2t8ZW58MHx8MHx8fDA%3D',
//     description: 'It’s a book about you. Often times we’re not waiting on God...',
//     preorder_link: 'https://example.com/preorder/3',
//     retailers: [
//       { name: 'Amazon', link: 'https://www.amazon.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png' },
//     ]
//   },
  // Add more books here as needed
];

const BooksPage = () => {
  return (
    <>
      <Header />
      <div className="booksPageContainer">
        <div className="booksheroSection">
          <h1 className="booksheroTitle">BOOKS</h1>
        </div>
        {booksData.length === 1 ? (
          <div className="singleBookContainer">
            <div className="singleBookContent">
              <div className="singleBookImage">
                <img src={booksData[0].thumbnail} alt={booksData[0].title} />
              </div>
              <div className="singleBookDetails">
                <h2 className="bookTitle">{booksData[0].title}</h2>
                <p className="bookDescription">{booksData[0].description}</p>
                <div className="retailersSection">
                  {booksData[0].retailers.map(retailer => (
                    <a key={retailer.name} href={retailer.link} target="_blank" rel="noopener noreferrer">
                      <img src={retailer.logo} alt={retailer.name} className="retailerLogo" />
                    </a>
                  ))}
                </div>
                <a href={booksData[0].preorder_link} className="preorderButton" target="_blank" rel="noopener noreferrer">
                Place Your Order Now
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="booksGrid">
            {booksData.map(book => (
              <div key={book.id} className="bookCard">
                <img src={book.thumbnail} alt={book.title} className="bookImage" />
                <h2 className="bookTitle">{book.title}</h2>
                <p className="bookDescription">{book.description}</p>
                <div className="retailersSection">
                  {book.retailers.map(retailer => (
                    <a key={retailer.name} href={retailer.link} target="_blank" rel="noopener noreferrer">
                      <img src={retailer.logo} alt={retailer.name} className="retailerLogo" />
                    </a>
                  ))}
                </div>
                <a href={book.preorder_link} className="preorderButton" target="_blank" rel="noopener noreferrer">
                  Place Your Order Now
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BooksPage;
