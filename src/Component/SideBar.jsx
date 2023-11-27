import Allsongs from '../assets/img/allsongs.png';
import StarSideBar from '../assets/img/Starsidebar.png';
import Toplist from '../assets/img/Toplist.png';
import FavSinger from '../assets/img/FavSinger.png';
import Contact from '../assets/img/Contact.png';
import About from '../assets/img/About.png';
import Logo from './../assets/img/logo.webp'
import { memo } from 'react';

const Sidebar = () => {
    return (
        <aside className="h-100 px-4 d-flex flex-column justify-content-around">
            <div className="sidebar-logo py-3 d-flex align-items-center">
                <img
                    width="12%"
                    src={Logo} alt="" />
                <h2 className='px-3'>musicplayer</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a className='active'>
                            <img
                                width="7%"
                                src={Allsongs} alt="logo" />
                            <span>All Songs</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img
                                width="7%"
                                src={StarSideBar} alt="logo" />
                            <span>Favorite Songs</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img
                                width="8%"
                                src={Toplist} alt="logo" />
                            <span>Top Player Songs</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img
                                width="8%"
                                src={FavSinger} alt="logo" />
                            <span>Popular singers</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img
                                width="8%"
                                src={Contact} alt="logo" />
                            <span>Contact Us</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img
                                width="8%"
                                src={About} alt="logo" />
                            <span>About Us</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <p>@Copy right reserver Amin-Pakravesh</p>
        </aside>
    );
}

export default memo(Sidebar);