import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.tsx";
import { addPopularMovies } from "../utils/MovieSlice.tsx";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store: any) => store.movies.popularMovies);

    const getPopularMovies = useCallback(async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    }, [dispatch]);

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, [popularMovies, getPopularMovies]);
};

export default usePopularMovies;
