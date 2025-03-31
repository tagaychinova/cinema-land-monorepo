import { MovieCard } from '@ui';

export default function Home() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-x-6 gap-y-8">
      {[...Array(20)].map((_, index) => (
        <MovieCard key={index} />
      ))}
    </div>
  );
}
