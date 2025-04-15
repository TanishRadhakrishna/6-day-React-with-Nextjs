import { fetchMovieDetails } from '@/lib/api/tmdb';

export default async function MoviePage({
  params,
}: {
  params: { id: string }
}) {
  const movie = await fetchMovieDetails(params.id);
  
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Image
        src={movie.poster}
        alt={movie.title}
        width={500}
        height={750}
        className="rounded-lg"
      />
      <h1 className="text-4xl font-bold mt-4">{movie.title}</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <Section title="Details">
          <p>Release Year: {movie.year}</p>
          <p>Rating: {movie.rating}/10</p>
          <GenreBadges genres={movie.genres} />
        </Section>
        <Section title="Synopsis">
          <p>{movie.overview}</p>
        </Section>
      </div>
    </div>
  );
}
