import MovieSearch from "components/modules/MovieSearch/MovieSearch"

import { useSearchParams } from "react-router-dom"

import { searchMovie } from "components/api/movies"
import MovieList from "components/modules/MovieList/MovieList"

import { useState, useEffect } from "react"

const MoviesPage = () => {

    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null
    })

    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get("search")

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                }));
                const data = await searchMovie(search)
                // console.log(data);
                setState(prevState => ({
                    ...prevState,
                    items: data.results,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            } finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false
                    }
                })
            }
        }

        if (search) {
            fetchMovies()
        }

    }, [search])

    const changeSearch = ({ search }) => {
        setSearchParams({search})
    }

    const {items} = state

    return (
        <div className="container">
            <h1>Search for movies</h1>
            <MovieSearch onSubmit={changeSearch} />
            <MovieList items={items} />
        </div>
    )
}

export default MoviesPage