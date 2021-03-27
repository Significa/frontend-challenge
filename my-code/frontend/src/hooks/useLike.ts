import React from "react";

export default function useLike(imdbID: string) {
  const [liked, setLiked] = React.useState<boolean>(() => {
    const likedMovies = localStorage.getItem("@App/likedMovies");
    let parsed;
    try {
      parsed = JSON.parse(likedMovies || "");
    } catch {
      parsed = {};
    }
    // Set liked initial state
    if (parsed[imdbID]) {
      return true;
    }
    return false;
  });

  React.useEffect(() => {
    const likedMovies = localStorage.getItem("@App/likedMovies");
    let parsed;

    // Avoid JSON.Parse error if the stringified object is malformed for some reason
    try {
      parsed = JSON.parse(likedMovies || "");
    } catch {
      console.log("Failed to parse JSON...");
      parsed = {};
    }

    const newLikedMovies = {
      ...parsed,
      [imdbID]: liked,
    };

    // Save likes to local storage
    localStorage.setItem("@App/likedMovies", JSON.stringify(newLikedMovies));
  }, [liked]);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    // We need to stop the event propagation from bubbling up here
    // because we don't want the like button to trigger the route change.
    e.stopPropagation();
    setLiked(!liked);
  };

  return { liked, handleLike };
}
