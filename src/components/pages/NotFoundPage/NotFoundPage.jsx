import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1>Page not found.</h1>
            <Link to='/'>Go to home page</Link>
        </div>
    )
}

export default NotFoundPage