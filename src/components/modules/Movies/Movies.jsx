import { useState, useEffect } from "react";
import { getMovies } from "components/api/movies";

import MovieList from "../MovieList/MovieList";

const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null
    })
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
                const data = await getMovies();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...data.results]
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
    }, [setState])

    const { items, loading, error } = state
    
    return (
        <div>
            {items.length > 0 && <MovieList items={items}/>}
            {loading && <p>Loading</p>}
            {error && <p>Not found</p>}
        </div>
    )
}

export default Movies