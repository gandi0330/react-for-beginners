import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){

    const [movie, setMovie] = useState();
    const {id} = useParams();

    const getMovie = async () => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                )
        ).json();

        setMovie(json.data.movie);
        
    };

    useEffect(()=>{
        getMovie()
    }, []);

    console.log(movie);
    return (
        <div>
            <img src={movie.medium_cover_image}/>
            <p>년도 : {movie.year}</p>
            <p>평점 : {movie.rating}</p>
            <p>좋아요 : {movie.like_count}</p>
        </div>
    )
}

export default Detail;