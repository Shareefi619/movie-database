"use client";
import React, { useState } from "react";
import { searchMovies } from "../Services/movies.services";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
export default function MovieSearch() {
  const [movies, setMovie] = useState([]);

  const handleSearch = async (query: string) => {
    const results = await searchMovies(query);
    setMovie(results);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 gap-4 mt-8">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
