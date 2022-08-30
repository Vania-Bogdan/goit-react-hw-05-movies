import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "components/api/movies";

const Reviews = () => {
    const [state, setState] = useState({
        reviews: [],
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
                const data = await getMovieReviews(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        reviews: data.results
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

    const { reviews } = state

    const elements = reviews.map(({ id, author, content }) => (
        <li key={id}>
            <h5>{author}</h5>
            <p>{content}</p>
        </li>
    ));
    
    return (
        <ul>
            {reviews.length > 0 ? elements :
                <p className="cast-name">No reviews, sorry.</p>}
        </ul>
    )
}

export default Reviews