import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants.tsx";
import { addTrailerVideo } from "../utils/MovieSlice.tsx";

const useMovieTrailer = (movieId: number) => {
    const dispatch = useDispatch();

    const getMovieVideo = useCallback(async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
            const json = await data.json();
            const filterData = json.results.filter((video: any) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Error fetching movie trailer:", error);
        }
    }, [movieId, dispatch]);

    useEffect(() => {
        getMovieVideo();
    }, [getMovieVideo]);
};

export default useMovieTrailer;