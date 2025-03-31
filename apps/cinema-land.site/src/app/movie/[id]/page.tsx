import { use } from 'react';
import Image from 'next/image';

type Params = Promise<{ id: string }>;

export default function Movie({ params }: { params: Params }) {
  const { id } = use(params);

  return (
    <div className="max-w-(--content-width) m-auto flex gap-6 mt-12">
      <Image
        className="w-100 h-150"
        src="/poster_orig_lg.jpg"
        width={400}
        height={600}
        alt="Picture of the author"
      />
      <div>
        <div className="primary-text">Фильм 12+</div>
        <div className="secondary-text text-2xl">
          Гарри Поттер и философский камень
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="secondary-text w-48">Год выпуска:</div>
            <div className="primary-text">2001</div>
          </div>
          <div className="flex">
            <div className="secondary-text w-48">Страна:</div>
            <div className="primary-text">Великобритания, США</div>
          </div>
          <div className="flex">
            <div className="secondary-text w-48">Жанр:</div>
            <div className="primary-text">Фэнтези </div>
          </div>
          <div className="flex">
            <div className="secondary-text w-48">Длительность:</div>
            <div className="primary-text">2 часа 33 минуты</div>
          </div>
          <div className="flex">
            <div className="secondary-text w-48">Рейтинг:</div>
            <div className="primary-text">8.2 / 10</div>
          </div>
          <div>
            <div className="secondary-text w-48">О фильме:</div>
            <div className="primary-text">
              Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: его
              родители умерли, едва ему исполнился год, а от дяди и тётки,
              взявших сироту на воспитание, достаются лишь тычки да
              подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется.
              Странный гость, неожиданно появившийся на пороге, приносит письмо,
              из которого мальчик узнаёт, что на самом деле он волшебник и
              принят в Хогвартс — школу магии. А уже через пару недель Гарри
              будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни,
              где его ждут невероятные приключения, верные друзья и самое
              главное — ключ к разгадке тайны смерти его родителей.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
