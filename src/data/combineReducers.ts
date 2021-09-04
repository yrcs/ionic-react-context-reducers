export function combineReducers<R extends { [key: string]: any }>(reducers: R) {
  type keys = keyof typeof reducers;
  type returnType = { [K in keys]: ReturnType<typeof reducers[K]> };
  const combinedReducer = (prevState: any, action: any) => {
    const newState: returnType = {} as any;
    const keys = Object.keys(reducers);
    keys.forEach((key) => {
      const result = reducers[key](prevState[key], action);
      newState[key as keys] = result || prevState[key];
    });
    return newState;
  };
  return combinedReducer;
}
