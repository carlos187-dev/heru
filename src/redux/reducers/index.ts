import { combineReducers } from "redux";
import { userReducer } from "./usersReducer/users";

const rootReducer = combineReducers({
    users: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;