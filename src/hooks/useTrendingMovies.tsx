import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.tsx";
import { addTrendingMovies } from "../utils/MovieSlice.tsx";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector((store: any) => store.movies.trendingMovies);

    const getTrendingMovies = useCallback(async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addTrendingMovies(json.results));
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    }, [dispatch]);

    useEffect(() => {
        !trendingMovies && getTrendingMovies();
    }, [trendingMovies, getTrendingMovies]);
};

export default useTrendingMovies;
