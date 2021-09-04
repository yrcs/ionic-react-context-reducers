import { CountActions } from "./count.action";
import { CountState } from "./count.state";

export function countReducer(
  prevState: CountState,
  action: CountActions
): CountState {
  const { type, count } = action;
  switch (type) {
    case "plus":
      return { ...prevState, count: prevState.count + count };
    case "minus":
      return { ...prevState, count: prevState.count - count };
  }
}
