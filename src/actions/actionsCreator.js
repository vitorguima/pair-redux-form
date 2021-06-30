export const SUBMIT_FORM = 'SUBMIT_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';

export function submitForm(data) {
  return ({
    type: SUBMIT_FORM,
    personalData: data,
  })
}

export function clearForm() {
  return({
    type: CLEAR_FORM,
  })
}