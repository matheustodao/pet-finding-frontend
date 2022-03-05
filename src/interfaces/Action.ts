export interface Action {
  type: 'nextPage' | 'previousPage' | 'setPage',
  value?: number,
}
