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

const audioData = [
  {
    id: 1,
    title: 'Strike The Ground',
    thumbnail: 'https://static.wixstatic.com/media/4a2d7c_0ad7c581971a4e55a9322a01c941f0c1~mv2.jpg/v1/crop/x_732,y_0,w_1536,h_1550/fill/w_332,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Strike-The-Ground-Art-Final_edited.jpg',
    platform: 'youtube',
    platform_link: 'https://www.youtube.com/channel/UCSQTicor-IdNgtuALXK6dXQ'
  },
  {
    id: 2,
    title: 'Expect Impossible',
    thumbnail: 'https://static.wixstatic.com/media/4a2d7c_4ff41e62c39a4ad08884a95b93301821~mv2.jpg/v1/crop/x_5,y_0,w_1189,h_1200/fill/w_332,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1200x1200bf-60-2.jpg',
    platform: 'spotify',
    platform_link: 'https://open.spotify.com/album/2W0XPiGBbTzCLrPtsHpgyu?si=WhCwQOeNRAap_3U8ryjV0Q'
  },
  {
    id: 3,
    title: 'Tent Revival',
    thumbnail: 'https://static.wixstatic.com/media/4a2d7c_fa89d626eb0545119c3a63079682be37~mv2.png/v1/crop/x_3,y_0,w_634,h_640/fill/w_332,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sddefault_jpg.png',
    platform: 'apple_music',
    platform_link: 'https://music.apple.com/tz/album/divine-breakthrough/1498786303'
  },
  {
    id: 4,
    title: 'Oil + Water',
    thumbnail: 'https://static.wixstatic.com/media/4a2d7c_fa89d626eb0545119c3a63079682be37~mv2.png/v1/crop/x_3,y_0,w_634,h_640/fill/w_332,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sddefault_jpg.png',
    platform: 'amazon_music',
    platform_link: 'https://www.amazon.com/Divine-Breakthrough-Moi-Albert/dp/B084Q6B374'
  },
  {
    id: 5,
    title: 'Broken Record',
    thumbnail: 'https://www.moi-albert.com/assets/image1-dcdc4034.png',
    platform: 'audiomack',
    platform_link: 'https://audiomack.com/moialbert/album/divine-breakthrough'
  },
  {
    id: 6,
    title: 'Crossover',
    thumbnail: 'https://www.moi-albert.com/assets/DivineBreak-7f74813f.jpeg',
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

