export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_SELECTED_POST = 'CHANGE_SELECTED_POST';


export function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
export function changeSelectedPost(selectedIndex) {
  return {
    type: CHANGE_SELECTED_POST,
    selectedIndex
  };
}
