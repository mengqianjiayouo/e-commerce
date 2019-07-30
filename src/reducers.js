import { combineReducers } from "redux";
import { LOGIN } from "./actions";

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign(
        {},
        {
          user: action.user.username,
          loggedIn: true,
          userId: action.user.user_id,
          platform: action.user.platform,
          column_config: action.user.column_config,
          roles: action.user ? action.user.roles : [],
          permissions: action.user ? action.user.permissions : []
        }
      );

    default:
      return state;
  }
};

const Reducer = combineReducers({
  login
});

export default Reducer;
