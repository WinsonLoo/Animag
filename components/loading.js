export default function Loading ({anime,manga}) {
    return(
        <div className = "flex h-64 p-64">
            <div className = "h-64">
                <div className = "h-64">
                {
                    anime?(
                        <div className="h-64">...Loading Anime...</div>
                    ):
                    (
                        <div className="h-64">...Loading Manga...</div>
                    )
                }
                </div>
            </div>
        </div>
    );
}