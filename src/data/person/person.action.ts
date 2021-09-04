import { ActionType } from "../types";
import { PersonState } from "./person.state";

export const addPerson = (data: Partial<PersonState>) =>
  ({
    type: "add-person",
    data,
  } as const);

export type PersonActions = ActionType<typeof addPerson>;
