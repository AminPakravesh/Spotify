import { memo, useState } from "react";
import { FaStarHalfStroke, FaStar } from "react-icons/fa6";

const MusicItem = ({ songs, cover, name, artist, id, currentSong, setCurrentSong, audioHandler }) => {

    const checkActiveSong = () => {
        const activeSong = songs.filter(item => item.id === id)
        setCurrentSong(activeSong);
    }

    const [favMusicStar, setFavMusicStar] = useState(false)

    return (
        <div onClick={checkActiveSong}
            className="music-item py-2 d-flex align-items-center ">
            <div className={`music-cover
            ${(currentSong[0].id === id && audioHandler) ? 'active' : ''}
            `}
                style={{ backgroundImage: `url(${cover})`, cursor: 'pointer' }}></div>
            <div className="music-desc">
                <h3>{artist}</h3>
                <h5>{name}</h5>
            </div>
            <div className="music-options d-flex align-items-center w-25 justify-content-between "
                style={{ cursor: 'pointer' }}>
                <span>2:45</span>
                <span className="btn"
                    onClick={() => setFavMusicStar(!favMusicStar)}>

                    {favMusicStar ?
                        <FaStar color="green" size={30} />
                        :
                        <FaStarHalfStroke size={30} />
                    }

                </span>
            </div>
        </div>
    );
}

export default memo(MusicItem);