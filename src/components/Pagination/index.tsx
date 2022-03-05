import { CaretLeft, CaretRight } from 'phosphor-react';
import { Action } from '../../interfaces/Action';
import './styles.scss';

type TProps = {
  maxVisibleButtons: number, // Max number will display in screen
  indexFirstButtonPage: number,
  currentPage: number,
  pages: number, // Total pages
  onActionPage: ({ type, value }: Action) => void,
}

export default function Pagination({
  maxVisibleButtons, indexFirstButtonPage,
  currentPage, pages, onActionPage }: TProps) {

  const element: number[] = [];
  for (let index = 1; index <= pages; index++) {
    element.push(index);
  }

  return (
    <div className="container__pagination">
      <button
        type="button"
        className="previous__button action__button"
        disabled={currentPage === 1}
        onClick={() => onActionPage({ type: 'previousPage' })}
      >
        <CaretLeft size={20}/>
      </button>
      <ul className="container__list--button-page">
        {element.splice(indexFirstButtonPage, maxVisibleButtons).map((page, index) => (
          <li
            key={page + index}
            className="container__list--wrapper-button"
          >
            <button
              type="button"
              className={`
                container__list--button
                ${currentPage === page && 'container__list--button-active'}
              `}
              onClick={() => onActionPage({ type: 'setPage', value: page })}

            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="next__button action__button"
        disabled={currentPage === pages}
        onClick={() => onActionPage({ type: 'nextPage' })}
      >
        <CaretRight size={20}/>
      </button>
    </div>
  )
}
