import { combineReducers } from "./combineReducers";
import { countReducer } from "./count/count.reducer";
import { personReducer } from "./person/person.reducer";

export const reducers = combineReducers({
  counter: countReducer,
  person: personReducer,
});

export type AppState = ReturnType<typeof reducers>;

export const initialState: AppState = {
  counter: {
    count: 0,
  },
  person: [],
};
