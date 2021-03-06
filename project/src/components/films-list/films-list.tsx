import {FilmsMainProps} from '../../types/types';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

function FilmsList({films}: FilmsMainProps) {
  const [activeFilmId, setActiveFilmId] = useState<number|undefined>();
  const items = films.map((item) => <FilmCard id={item.id} isActive={activeFilmId === item.id} onMouseOver={() => setActiveFilmId(item.id)} title={item.name} img={item.previewImage} key={item.id}></FilmCard>);
  return (
    <div className="catalog__films-list">
      {items}
    </div>
  );
}

export default FilmsList;
