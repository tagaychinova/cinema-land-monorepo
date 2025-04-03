import Image from 'next/image';
import Link from 'next/link';

export function MovieCard() {
  return (
    <Link href="/movie/536">
      <div className="rounded-sm relative inline-block overflow-hidden text-sm text-center">
        <Image
          src="/poster.jpg"
          width={200}
          height={300}
          alt="Picture of the author"
        />
        <div className="absolute top-0 right-0 bg-black/75 text-amber-50 rounded-bl-sm pt-1 pb-1 pl-2 pr-2">
          12+
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/75 opacity-0 hover:opacity-100 transition duration-300">
          <div className="text-white p-3 h-1/2 flex flex-wrap justify-center content-center">
            Гарри Поттер и философский камень
          </div>
          <div className="text-white p-3 h-1/2 flex flex-wrap justify-center content-center">
            Фэнтези
            <br />
            2010
          </div>
        </div>
        <div className="absolute bottom-0 left-0 bg-black/75 text-amber-50 rounded-tr-sm pt-1 pb-1 pl-2 pr-2">
          Фильм
        </div>
        <div className="absolute bottom-0 right-0 bg-yellow-300 text-gray-700 rounded-tl-sm pt-1 pb-1 pl-2 pr-2 font-bold">
          8.2
        </div>
      </div>
      <div className="text-gray-500 dark:text-gray-400 truncate">
        Гарри Поттер и философский камень
      </div>
    </Link>
  );
}
