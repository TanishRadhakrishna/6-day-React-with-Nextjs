'use client';

import { useState } from 'react';
import { fetchMovies, fetchBooks } from '@/lib/api';
import MediaGrid from '@/components/MediaGrid';

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState<'movies' | 'books'>('movies');

  const handleSearch = async (query: string) => {
    const data = searchType === 'movies' 
      ? await fetchMovies(query)
      : await fetchBooks(query);
    setResults(data);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 mb-8">
        <SearchBar onSearch={handleSearch} />
        <select 
          onChange={(e) => setSearchType(e.target.value as 'movies' | 'books')}
          className="p-2 border rounded"
        >
          <option value="movies">Movies</option>
          <option value="books">Books</option>
        </select>
      </div>
      <MediaGrid items={results} type={searchType} />
    </div>
  );
}
