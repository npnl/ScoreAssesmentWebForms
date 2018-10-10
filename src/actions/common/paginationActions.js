import { common as CommonActionTypes } from "../actionTypes";

const switchPage = (paginatorId, currentPage) => {
  return {
    type: CommonActionTypes.pagination.SWITCH_PAGE,
    payload: {
      paginatorId: paginatorId,
      currentPage: currentPage
    }
  };
};

const setTotalPages = (paginatorId, totalPages) => {
  return {
    type: CommonActionTypes.pagination.SET_TOTAL_PAGES,
    payload: {
      paginatorId: paginatorId,
      totalPages: totalPages
    }
  };
};

export default  {
  switchPage: switchPage,
  setTotalPages: setTotalPages, 
};
