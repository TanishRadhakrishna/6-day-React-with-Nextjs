import { createContext, useContext, useEffect, useState } from 'react';

type Favorite = {
  id: string;
  type: 'movie' | 'book';
  title: string;
  poster: string;
};

const FavoritesContext = createContext<{
  favorites: Favorite[];
  toggleFavorite: (item: Favorite) => void;
}>({ favorites: [], toggleFavorite: () => {} });

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (item: Favorite) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === item.id);
      const newFavs = exists 
        ? prev.filter(f => f.id !== item.id)
        : [...prev, item];
      localStorage.setItem('favorites', JSON.stringify(newFavs));
      return newFavs;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
