// import React, { useEffect, useState } from 'react';
// import './AudioPage.css';
// import Header from './Header';

// const AudioPage = () => {
//   const [audios, setAudios] = useState([]);

//   useEffect(() => {
//     // Fetch audios from the backend (replace with your actual API endpoint)
//     fetch('http://127.0.0.1:8000/api/audios/')
//       .then(response => response.json())
//       .then(data => setAudios(data));
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="audioPageContainer">
//         <div className="heroSection">
//           <h1 className="heroTitle">MUSIC</h1>
//         </div>
//         <div className="audioGrid">
//           {audios.map(audio => (
//             <div key={audio.id} className="audioCard">
//               <img src={audio.thumbnail} alt={audio.title} className="audioImage" />
//               <h2 className="audioTitle">{audio.title}</h2>
//               <div className="audioActions">
//                 <button className="spotifyButton">Spotify</button>
//                 <button className="appleMusicButton">Apple Music</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AudioPage;



import React from 'react';
import './AudioPage.css';
import Header from './Header';
import img1 from '../assets/images/Belongs.jpg'
import img2 from '../assets/images/Chant.jpg'
import img3 from '../assets/images/Promises .jpg'


const audioData = [
  {
    id: 1,
    title: 'Strike The Ground',
    thumbnail: img1,
    platform: 'youtube',
    platform_link: 'https://www.youtube.com/channel/UCSQTicor-IdNgtuALXK6dXQ'
  },
  {
    id: 2,
    title: 'Expect Impossible',
    thumbnail: img2,
    platform: 'spotify',
    platform_link: 'https://open.spotify.com/album/2W0XPiGBbTzCLrPtsHpgyu?si=WhCwQOeNRAap_3U8ryjV0Q'
  },
  {
    id: 3,
    title: 'Tent Revival',
    thumbnail: img3,
    platform: 'apple_music',
    platform_link: 'https://music.apple.com/tz/album/divine-breakthrough/1498786303'
  },
  {
    id: 4,
    title: 'Oil + Water',
    thumbnail: img3,
    platform: 'amazon_music',
    platform_link: 'https://www.amazon.com/Divine-Breakthrough-Moi-Albert/dp/B084Q6B374'
  },
  {
    id: 5,
    title: 'Broken Record',
    thumbnail: img2,    
    platform: 'audiomack',
    platform_link: 'https://audiomack.com/moialbert/album/divine-breakthrough'
  },
  {
    id: 6,
    title: 'Crossover',
    thumbnail: img1,
    platform: 'soundcloud',
    platform_link: 'https://soundcloud.com/moialbert'
  },
];

const platformNames = {
  youtube: 'YouTube',
  spotify: 'Spotify',
  apple_music: 'Apple Music',
  amazon_music: 'Amazon Music',
  audiomack: 'Audiomack',
  soundcloud: 'SoundCloud'
};

const platformStyles = {
  youtube: 'youtubeButton',
  spotify: 'spotifyButton',
  apple_music: 'appleMusicButton',
  amazon_music: 'amazonMusicButton',
  audiomack: 'audiomackButton',
  soundcloud: 'soundcloudButton'
};

const AudioPageStatic = () => {
  return (
    <>
      <Header />
      <div className="audioPageContainer">
        <div className="musicheroSection">
          <h1 className="musicheroTitle">MUSIC</h1>
        </div>
        <div className="audioGrid">
          {audioData.map(audio => (
            <div key={audio.id} className="audioCard">
              <img src={audio.thumbnail} alt={audio.title} className="audioImage" />
              <h2 className="audioTitle">{audio.title}</h2>
              <div className="audioActions">
                <a href={audio.platform_link} className={platformStyles[audio.platform]} target="_blank" rel="noopener noreferrer">
                  {platformNames[audio.platform]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AudioPageStatic;

