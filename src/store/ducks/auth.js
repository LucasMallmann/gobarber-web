const initialState = {};

export const Types = {
  SING_IN_REQUEST: '@auth/SING_IN_REQUEST',
  SING_IN_SUCCESS: '@auth/SING_IN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
};

export const ActionCreators = {
  /**
   * @param {string} email The user email
   * @param {string} password The user password
   */
  singInRequest: (email, password) => ({
    type: Types.SING_IN_REQUEST,
    payload: { email, password },
  }),

  /**
   * @param {Object} token Token with user information
   * @param {Object} user The logged user
   */
  signInSuccess: (token, user) => ({
    type: Types.SING_IN_SUCCESS,
    payload: { token, user },
  }),

  signFailure: () => ({
    type: Types.SIGN_FAILURE,
  }),
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
