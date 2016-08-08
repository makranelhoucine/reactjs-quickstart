import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import loggedUser from "./loggedUserReducer"

export default combineReducers({
  tweets,
  user,
  loggedUser,
})
