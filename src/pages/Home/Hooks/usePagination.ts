import { useReducer } from 'react'

type TProps = {
  total: number, // Lenght of data
  limit: number, // How many items per page
  offset: number, // How many items going to skip
}

export default function usePagination({ total, limit, offset }: TProps) {
  const initialState = {
    currentPage: offset,
  };
  const MAX_ITEMS = 5 // Max number will display in screen;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const pages = Math.ceil(total / limit); // Total pages
  const [state, dispatch] = useReducer(reducer, initialState);
  const first = Math.max(state.currentPage - MAX_LEFT, 1); // It is first button list page and can't be less 1

  function reducer(state: any, action: TAction) {
    switch (action.type) {
      case 'nextPage':
        if (state.currentPage === pages) {
          return { currentPage: state.currentPage };
        }

        return { currentPage: state.currentPage + 1 };
      case 'previousPage':
        if (state.currentPage === 1) {
          return { currentPage: state.currentPage };
        }

        return { currentPage: state.currentPage - 1 };
      case 'setPage':
        if (state.currentPage > pages) {
          return { currentPage: state.currentPage };
        } else if (state.currentPage < 1) {
          return { currentPage: 1 };
        } else {
          return { currentPage: action.value };
        }
      default:
        if (!action.value) {
          throw new Error('If you trying to use "setPage" you must pass a action.value');
        }

        throw new Error('The action type only must be: nextPage, previousPage or setPage');
    }
  }

  return {
    currentPage: state.currentPage,
    maxButtons: MAX_ITEMS,
    first,
    pages,
    onActionPage: dispatch,
    limit: limit,
  };
}
