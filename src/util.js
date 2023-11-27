import { v4 as uuidv4 } from 'uuid';
const musiclist = () => {
    return ([
        {
            id: uuidv4(),
            name: 'rahe mykhane',
            artist: 'Homayoun Shajarian',
            cover: 'http://dl.artmusics.top/cover/Homayoun20Shajarianj20-20Track07.jpg',
            active: 'true',
            audio: 'http://srv.artmusics.top/track/2020/Homayoun20Shajarianj20-20Track07-[ArtMusic].mp3'

        },

        {
            id: uuidv4(),
            name: 'Qalbamo Dozdidi',
            artist: 'Farzad Farokh',
            cover: 'https://upmusics.com/wp-content/uploads/2020/03/hrt.jpg',
            active: 'false',
            audio: 'https://irsv.upmusics.com/99/Farzad%20Farrokh%20-%20Ghalbamo%20Dozdidi%20(320).mp3'
        },

        {
            id: uuidv4(),
            name: 'Saghi bia',
            artist: 'Mohammad reza Shajarian',
            cover: 'https://upmusics.com/wp-content/uploads/2023/05/Screenshot-2023-05-11-091927.jpg',
            active: 'false',
            audio: 'https://irsv.upmusics.com/AliBZ/MohammadReza%20Shajryan%20%E2%80%93%20Saghi%20Bia%20(320).mp3'
        },
        {
            id: uuidv4(),
            name: 'Paeeze Delam',
            artist: 'Amir Abbas Golab',
            cover: 'https://music-fa.com/wp-content/uploads/2023/11/IMG_20231119_182046_450_x_450_pixel-300x300.jpg',
            active: 'false',
            audio: 'https://dl.sultanmusic.ir/music/1402/8/2/Amir%20Abbas%20Golab%20-%20Paeeze%20Delam.mp3'
        },
        {
            id: uuidv4(),
            name: 'Tamomesh Kon',
            artist: 'Farzad Farzin',
            cover: 'https://music-fa.com/wp-content/uploads/2023/06/Farzad-Farzin-Tamoomesh-Kon-Music-fa.com_-300x300.jpg',
            active: 'false',
            audio: 'https://irsv.upmusics.com/AliBZ/Farzad%20Farzin%20%7C%20Tamoomesh%20Kon(128).mp3'
        },
        {
            id: uuidv4(),
            name: 'Mirese Khabara',
            artist: 'Ali Yasini',
            cover: 'https://sultanmusic.ir/wp-content/uploads/2023/10/Ali-Yasini-Mirese-Khabara.jpg',
            active: 'false',
            audio: 'https://dl.sultanmusic.ir/music/1402/7/1/Ali%20Yasini%20-%20Mirese%20Khabara%20%28128%29.mp3'
        },
    ]);
}

export default musiclist;