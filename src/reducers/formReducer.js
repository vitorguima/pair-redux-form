import {
  SUBMIT_FORM,
  CLEAR_FORM,
  CHANGE_DATA,
} from "../actions/actionsCreator";

const INITIAL_STATE = {
  data: {
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    state: "",
    home: "",
    resume: "",
    job: "",
    enter: "false",
    description: "",
  },
  submition: false,
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_DATA:
      return { ...state, data: { ...state.data, [action.name]: action.value } };
    case SUBMIT_FORM:
      return { ...state, submition: true };
    case CLEAR_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default formReducer;
