import produce from 'immer';
import { Types as AuthTypes } from './auth';

const initialState = {
  profile: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.SING_IN_SUCCESS:
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
