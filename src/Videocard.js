import React, {forwardRef} from 'react'
import './Videocard.css'
import TextTruncate from "react-text-truncate"
import ThumbUpSharp from '@material-ui/icons/ThumbUpSharp'

const base_url= 'https://image.tmdb.org/t/p/original';
const Videocard=forwardRef(({movie},ref)=> {
    return (
        <div ref= {ref} className = "videoCard">
            <img src= {`${base_url}${movie.backdrop_path || movie.poster_path}`} alt ={`${movie.title}`}/>
            <TextTruncate
                 line={1}
                 element="p"
                 truncateText="…"
                 text={movie.overview}    
             />             
            <h3>{movie.title || movie.original_name}</h3>
            <div className ='videoCard__stats'>
                <p className = "info-item">{movie.release_date ||movie.first_air_date}</p>
                <ThumbUpSharp />
                <p className = "info-item count">{movie.vote_count}</p>
            </div>
        </div>
    )
})
export default  Videocard