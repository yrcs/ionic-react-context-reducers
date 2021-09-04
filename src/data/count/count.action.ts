import { ActionType } from "../types";

const delay = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const plus = (count: number) => ({ type: "plus", count } as const);

export const minus = (count: number) => ({ type: "minus", count } as const);

export const plusAsync =
  (count: number, time: number = 500) =>
  async (dispatch: React.Dispatch<any>) => {
    await delay(time);
    dispatch(plus(count));
  };

export type CountActions = ActionType<typeof plus> | ActionType<typeof minus>;
