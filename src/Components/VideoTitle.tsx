interface VideoTitleProps {
    title: string;
    overview: string;
}

const VideoTitle = ({title, overview}: VideoTitleProps) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-6 sm:pb-12 md:justify-center px-4 sm:px-8 md:px-12 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none">
            <div className="pointer-events-auto max-w-full sm:max-w-2xl md:max-w-3xl space-y-2 sm:space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-bold drop-shadow-xl tracking-tight">
                    {title}
                </h1>
                <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4 drop-shadow-lg">
                    {overview}
                </p>
                <div className="flex flex-row gap-2 sm:gap-4 pt-1 sm:pt-2">
                    <button className="bg-white text-black py-2.5 sm:py-3 md:py-3.5 px-6 sm:px-8 md:px-12 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-netflix hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-2.5 shadow-netflix hover:shadow-lg active:scale-98">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        Play
                    </button>
                    <button className="bg-secondary-700 bg-opacity-80 text-white py-2.5 sm:py-3 md:py-3.5 px-6 sm:px-8 md:px-12 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-netflix hover:bg-opacity-70 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-2.5 shadow-netflix hover:shadow-lg active:scale-98">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;