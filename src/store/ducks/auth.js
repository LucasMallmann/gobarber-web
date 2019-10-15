const initialState = {};

export const Types = {
  SING_IN_REQUEST: '@auth/SING_IN_REQUEST',
  SING_IN_SUCCESS: '@auth/SING_IN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
};

export const ActionCreators = {
  singInRequest: (email, password) => ({
    type: Types.SING_IN_REQUEST,
    payload: { email, password },
  }),
  signInSuccess: (token, user) => ({
    type: Types.SING_IN_SUCCESS,
    payload: { token, user },
  }),
  signFailure: () => ({
    type: Types.SIGN_FAILURE,
  }),
};

export default function auth(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}
