import React from 'react';
import './Header.css';
import logo from './assets/images/hulu.png'
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
export default function Header() {
    return (        
        <div className ="header">
            <div className ="header__Icons ">
                <div className ="header__icon header__icon--active">
                    <HomeIcon  className ="icon"/>
                    <p >Home</p>
                </div>
                <div className ="header__icon">
                    <FlashOnIcon className ="icon"/>    
                    <p>Trending</p>
                </div>
                <div className ="header__icon">
                    <LiveTvIcon className ="icon"/>   
                    <p>Live TV</p>
                </div>
                <div className ="header__icon">
                    <VideoLibraryIcon className ="icon" />   
                    <p>Collections</p>
                </div>
                
                <div className ="header__icon">
                    <SearchIcon className ="icon"/>   
                    <p>Look Up </p>
                </div>
               
                <div className ="header__icon">
                    <PersonIcon className ="icon"/>  
                    <p>Profile</p>
                </div>
               
                
            </div>
            <img src = {logo} alt= 'logo' />
        </div>
    )
}


