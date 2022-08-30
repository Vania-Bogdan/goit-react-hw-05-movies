import { Link, useLocation } from "react-router-dom";

const MovieList = ({ items }) => {
    
    const location = useLocation()
    const elements = items.map(({ id, title }) =>
        <li key={id} className="home-film-card">
            <Link state={{from: location }} to={`/movies/${id}`} className="home-film-link">{title}</Link>
        </li>)
    return (
        <ul className="home-films-list">
            {elements}
        </ul >
    )
}

export default MovieList

MovieList.defaultProps = {
    items: []
}