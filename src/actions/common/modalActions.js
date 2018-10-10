import { common as CommonActionTypes } from "../actionTypes";

const openModal = (modalId) => {
  return {
    type: CommonActionTypes.modals.OPEN_MODAL,
    payload: {
      modalId: modalId
    }
  };
};

const closeModal = () => {
  return {
    type: CommonActionTypes.modals.CLOSE_MODAL
  };
};

export default  {
  openModal: openModal,
  closeModal: closeModal
};
