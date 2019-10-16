import produce from 'immer';

const initialState = {
  token: null,
  signed: false,
  loading: false,
};

export const Types = {
  SING_IN_REQUEST: '@auth/SING_IN_REQUEST',
  SING_IN_SUCCESS: '@auth/SING_IN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
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

  /**
   * Store a new user
   * @param {string} name
   * @param {string} email
   * @param {string} password
   */
  signUpRequest: (name, email, password) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { name, email, password },
  }),

  signFailure: () => ({
    type: Types.SIGN_FAILURE,
  }),
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SING_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case Types.SING_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.SIGN_FAILURE: {
        draft.loading = false;
        draft.token = null;
        break;
      }
      default:
    }
  });
}
