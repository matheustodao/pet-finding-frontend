import { CaretLeft, CaretRight } from 'phosphor-react';
import './styles.scss';

type TProps = {
  maxButtons: number, // Max number will display in screen
  currentPage: number,
  first: number, // It is first button list page
  pages: number, // Total pages
  onActionPage: ({ type, value }: TAction) => void,
}

export default function Pagination({
  maxButtons: maxVisibleButtons,
  currentPage, first, pages, onActionPage }: TProps) {
  let lastIndex = maxVisibleButtons;
  let firstIndex = first - 1;

  if ((firstIndex + maxVisibleButtons) > pages) {
    firstIndex = (currentPage - (maxVisibleButtons - 1));
  }

  if ((pages - currentPage) <= 2) {
    firstIndex = firstIndex - 1;
  }

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
        {element.splice(firstIndex, lastIndex).map((page, index) => (
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
