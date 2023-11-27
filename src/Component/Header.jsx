import { useState , memo } from 'react';
import Logo from './../assets/img/logo.webp'
import { FaChevronRight, FaRegPauseCircle, FaChevronLeft } from "react-icons/fa";
import { FaCirclePlay, FaStarHalfStroke, FaStar } from "react-icons/fa6";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = ({ audioHandler, setAudioHandler, currentSong, songCurrentTime, songfullTime, audioRef , setCurrentSong , songs , setSongs}) => {

    const getClenTime = (time) => {
        return `${Math.floor(time / 60)} : ${('0' + Math.floor(time % 60)).slice(-2)}`
    }

    const getNext = () => {
        const index = songs.findIndex(item => item.id === currentSong[0].id)
        setCurrentSong([songs[index + 1]]);

        if(songs.indexOf(currentSong[0]) === songs.length  -1 ){
            setCurrentSong([songs[0]]);
        }
    }
    const getBack = () => {
        const index = songs.findIndex(item => item.id === currentSong[0].id) 
        setCurrentSong([songs[index - 1]]);
  
        if(songs.indexOf(currentSong[0]) <= 0 ){
            setCurrentSong([songs[songs.length  -1]]);
        }
    
    }


    const addToFavList = () => {
       const filtredSongs = songs.map(item => {
            if(item.id === currentSong[0].id){
                return {
                    ...item , 
                    active: !item.active
                }
            }else{
                return {
                    ...item , 
                    active:false
                }
            }
        });
        setSongs(filtredSongs)
        setCurrentSong([{
            ...currentSong[0],
            active: !currentSong[0].active
        }])
        if(!currentSong[0].active){
            toast.success('Add To Favorite Songs')
        }else{
            toast.warning('Deleted From Favorite Songs')
        }
    }

    return (
        <header>
            <ToastContainer/>
            <div className="container h-100">
                <div className="h-100 d-flex align-items-center">
                    <div style={{ backgroundImage: `url(${currentSong[0].cover})` }}
                        className="music-cover btn d-flex align-items-center justify-content-center"
                        onClick={() => setAudioHandler(!audioHandler)}
                    >
                        <div className="cover-filter"></div>


                        {(audioHandler) ?
                            <IoPauseOutline color='#6666f6' size={100} />
                            :
                            <IoPlayOutline color='#6666f6' size={100} />
                        }

                    </div>
                    <div className="music-description flex-grow-1">

                        <div className='d-flex justify-content-between'>

                            <div className="music-title">
                                <h1>{currentSong[0].name}</h1>
                                <h2>{currentSong[0].artist}</h2>
                            </div>

                            <span className="btn"
                                onClick={addToFavList}>

                                {
                                currentSong[0].active ? 
                                    <FaStar color="green" size={30} />
                                    :
                                    <FaStarHalfStroke size={30} />
                                }

                            </span>
                        </div>


                        <div className='music-range'>
                            <div className='d-flex justify-content-between'>
                                <span className='current-time'>{getClenTime(songCurrentTime)}</span>
                                <span className='full-time'>
                                    { songfullTime ? getClenTime(songfullTime) : '0 : 00'}
                                </span>
                            </div>
                            <input
                                onChange={(e) =>
                                    audioRef.current.currentTime = e.target.value}
                                value={songCurrentTime}
                                min={0}
                                max={songfullTime || 0}
                                className='w-100 btn'
                                type="range"
                            />
                        </div>
                        <div className='music-nav'>
                            <div>
                                <button className='btn'
                                    onClick={getBack}
                                >
                                    <FaChevronLeft
                                        size={15} />
                                </button>
                                <button onClick={() => setAudioHandler(!audioHandler)}
                                    className='btn'>
                                    {(audioHandler) ?
                                        <FaRegPauseCircle size={30} />

                                        :

                                        <FaCirclePlay
                                            size={30} />
                                    }

                                </button>
                                <button className='btn'
                                    onClick={getNext}
                                >
                                    <FaChevronRight  size={15}/>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className="main-logo pt-4 h-100 align-items-start w-25 d-flex justify-contentend">
                        <img
                            width="40%"
                            src={Logo} alt="logo" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);