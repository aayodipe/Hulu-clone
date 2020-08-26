import React from 'react'
import './Videocard.css'
import Photo from './assets/images/kevin.jpg'

export default function Videocard({movie}) {
    return (
        <div className = "videoCard">
            <img src= {Photo}/>
            <p>this is a description</p>
            <h3>Title</h3>
            <p>I am the paragraph</p>
        </div>
    )
}
