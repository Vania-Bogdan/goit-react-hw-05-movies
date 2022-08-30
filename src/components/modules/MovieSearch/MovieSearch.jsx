import { useState } from "react";

const MovieSearch = ({onSubmit}) => {
    const [state, setState] = useState({
        search: ""
    })

    const handleChange = ({ target }) => {
        const {name, value} = target
        setState({
            ...state,
            [name]: value, 
        })
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        onSubmit({ ...state })
        setState({
            search: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="search" value={state.search} onChange={handleChange} placeholder="Search for movies" required />
            <button type="submit">Search</button>
        </form>
    )
}

export default MovieSearch