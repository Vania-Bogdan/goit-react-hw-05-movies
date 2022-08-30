import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "components/api/movies";

const Cast = () => {
    const [state, setState] = useState({
        cast: [],
        loading: false,
        error: null
    })
    
    const {id} = useParams()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
                const data = await getMovieCast(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        cast: data
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false
                    }
                })
            }
        }
        fetchMovies()
    }, [setState, id])

    const { cast } = state.cast

    return (
        <>
            <ul className="cast-list">
                {cast ? cast.map(({ id, name, character, profile_path}) =>
                    <li key={id}  className="cast-item">
                        <img src={profile_path ? `https://image.tmdb.org/t/p/w342${profile_path}` : `https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png`} alt="" className="cast-foto"/>
                        <h5 className="cast-name">{name}</h5>
                        <p className="cast-character">{`(${character})`}</p>
                    </li>) :
                    <p className="cast-character">no actors</p>}
            </ul>
        </>
    )
}

export default Cast