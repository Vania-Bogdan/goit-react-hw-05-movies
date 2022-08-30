import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"))
const SingleFilmPage = lazy(() => import("./pages/SingleFilmPage/SingleFilmPage"))
const Cast = lazy(() => import("./pages/SingleFilmPage/Cast/Cast"))
const Reviews = lazy(() => import("./pages/SingleFilmPage/Reviews/Reviews"))

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<SingleFilmPage />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={ <Reviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes
