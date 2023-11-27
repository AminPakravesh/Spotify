import React, { useState, useRef, useEffect } from 'react'
import Header from './Component/Header';
import Sidebar from './Component/SideBar';
import Main from './Component/Main/Main';

//scss files
import './assets/styles/index.scss'


//my songs list 
import musiclist from './util';




function App() {


  const [songs, setSongs] = useState(musiclist());
  const [audioHandler, setAudioHandler] = useState(false);
  const [currentSong, setCurrentSong] = useState([
    {
      id: 0 ,
      name: 'Behet Qol Midam',
      artist: 'Mohsen Yeganeh',
      cover: 'https://upmusics.com/wp-content/uploads/2017/08/photo_2017-08-30_19-39-52.jpg',
      active: 'true',
      audio: 'https://irsv.upmusics.com/Downloads/Musics/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(320).mp3'
    },
  ]);

  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const [songfullTime, setSongFullTime] = useState(0);


  //useRef
  const audioRef = useRef();


  //useEffect
  useEffect(() => {
    if (audioHandler) audioRef.current.play();
    else audioRef.current.pause();


    setInterval(() => {
      setSongCurrentTime(audioRef.current.currentTime)
      setSongFullTime(audioRef.current.duration)
    }, 1000);

  }
    , [
      audioHandler, currentSong
    ])



    const getNext = () => {
      const index = songs.findIndex(item => item.id === currentSong[0].id)
      setCurrentSong([songs[index + 1]]);

      if(songs.indexOf(currentSong[0]) === songs.length  -1 ){
          setCurrentSong([songs[0]]);
      }
  }



  return (
    <div className="App">
      <Header
        audioHandler={audioHandler}
        setAudioHandler={setAudioHandler}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songCurrentTime={songCurrentTime}
        songfullTime={songfullTime}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
      />
        <audio
        ref={audioRef}
        src={currentSong[0].audio}
        onEnded={getNext}
        >     
        </audio>
      <main className='container' style={{ background: 'background:linear-gradient(90deg,#333333 33% , #333333 70% , #333333 7%)' }}>
        <div className="row h-100">

          <div className="col-md-4 px-0">
            <Sidebar />
          </div>

          <div className="col-md-8 px-0">
            <Main
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              songs={songs}
              audioHandler={audioHandler}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
