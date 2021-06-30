export const SUBMIT_FORM = "SUBMIT_FORM";
export const CLEAR_FORM = "CLEAR_FORM";
export const CHANGE_DATA = "CHANGE_DATA";

export function changeData(name, value) {
  return {
    type: CHANGE_DATA,
    name,
    value,
  };
}

export function submitForm() {
  return {
    type: SUBMIT_FORM,
  };
}

export function clearForm() {
  return {
    type: CLEAR_FORM,
  };
}
