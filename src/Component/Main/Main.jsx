import { memo } from 'react';
import MusicItem from "./Musicitem";

const Main = ({ songs, currentSong, setCurrentSong, audioHandler }) => {

    return (
        <main className='overflow-auto px-2'>
            {songs.map(item => (
                <MusicItem key={item.id}
                    songs={songs}
                    cover={item.cover}
                    name={item.name}
                    artist={item.artist}
                    id={item.id}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    audioHandler={audioHandler}
                />

            ))}

        </main>
    );
}

export default memo(Main);