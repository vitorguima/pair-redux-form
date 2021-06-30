import { SUBMIT_FORM } from '../actions/actionsCreator';
import { CLEAR_FORM } from '../actions/actionsCreator';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  home: '',
  resume: '',
  job: '',
  enter: 'false',
  description: '',
  submition: 'false',
}

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload;
    case CLEAR_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default formReducer;
