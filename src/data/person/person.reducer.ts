import { PersonActions } from "./person.action";
import { PersonState } from "./person.state";

export function personReducer(
  prevState: PersonState[],
  action: PersonActions
): Partial<PersonState>[] {
  switch (action.type) {
    case "add-person":
      return [action.data, ...prevState];
    default:
      return prevState;
  }
}
