import serverCalls from './serverCalls/serverCalls'

/*for MVP think i just have to get the user, post mvp hope to make a profile view with past orders and ability to alter site profile
with billing and shipping address*/

//initial state
const initialState = {
  user: {}
};

//constststs
const GET_USER = "GET_USER";

//action creators
export function getUser() {
  return {
    type: GET_USER,
    payload: serverCalls.getUser()
}
}
//the reducer
export default function user(state = initialState, action) {
  let { payload, type } = action;
  switch (type) {
    case GET_USER:
      return Object.assign({}, state, {
        user: payload
      });
    default:
      return state;
  }
}
