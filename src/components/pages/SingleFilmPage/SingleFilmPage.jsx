import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "components/api/movies";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

const SingleFilmPage = () => {
    const [state, setState] = useState({
        item: {},
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
                const data = await getMovieDetails(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: data
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

    const nav = useNavigate()

    const location = useLocation();
    const from = location.state?.from || "/"

    const goBack = () => {nav(from)}

    const { title, poster_path, vote_average, overview, 
        genres } = state.item

    const userScore = Math.round(vote_average * 10)
    return (
        <div className="container">
            <button className="go-back-btn" onClick={goBack}>🔙</button>
            <div className="main-info">
                <img src={poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : `https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png`} alt="Movie poster" className="film-poster"/>
                <div className="text-info">
                    <h2 className="film-title">{title}</h2>
                    <p className="film-score">User score: <span className="score-pers">{userScore}%</span></p>
                    <h3 className="film-overview">Overview</h3>
                    <p className="film-about">{overview}</p>
                    <h4 className="film-genres">Genres</h4>
                    <ul className="film-genres-list">
                        {genres ? genres.map(({ id, name }) => <li key={id} className="film-one-genre">{name}</li>) : <p className="film-one-genre">no genres</p>}
                    </ul>
                </div>
            </div>
            <div className="secondary-info"> 
                <Link state={{ from }} to={`/movies/${id}/cast`} className="film-btn">Cast</Link>
                <Link state={{ from }} to={`/movies/${id}/reviews`} className="film-btn">Reviews</Link>
                <Outlet />
            </div>
        </div>
    )
}

export default SingleFilmPage