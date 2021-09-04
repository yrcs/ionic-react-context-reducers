// Action object
export interface DispatchObject {
  type: string;
  [key: string]: any;
}

// If T extends Promise, extract the type R from the promise
// Otherwise, leave it as is
type PromiseResolveValue<T> = T extends Promise<infer R> ? R : T;

// Obtain the return type of a function type
// Eg. const f = () => (data: { [key: string]: any }) => ({type: "plus", data})
// type Aoo = ReturnType<ReturnType<typeof f>>
// The Aoo result is { type: string; data: { [key: string]: any } }
type EffectType<T extends (...args: any) => any> = ReturnType<ReturnType<T>>;

// To support asynchronous actions
type EffectReturnValue<T extends (...args: any) => any> = PromiseResolveValue<
  EffectType<T>
>;

// A normal action or an asynchronous action
export type ActionType<T extends (...args: any) => any> =
  ReturnType<T> extends DispatchObject ? ReturnType<T> : EffectReturnValue<T>;
