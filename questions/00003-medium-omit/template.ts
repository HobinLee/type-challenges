type Exclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
}