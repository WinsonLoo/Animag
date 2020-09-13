export default function Loading ({anime,manga}) {
    return(
        <div className = "flex h-64 p-64">
                {
                    anime?(
                        <div className="h-64"><p>...Loading Anime...</p></div>
                    ):
                    (
                        <div className="h-64"><p>...Loading Manga...</p></div>
                    )
                }
        </div>
    );
}