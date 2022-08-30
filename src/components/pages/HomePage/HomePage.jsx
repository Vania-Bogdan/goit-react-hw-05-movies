import Movies from "components/modules/Movies/Movies"

const HomePage = () => {
    return (
        <div className="container">
            <h1 className="heading">Trending today</h1>
            <Movies />
        </div>
    )
}

export default HomePage