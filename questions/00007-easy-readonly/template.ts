/**
 * readonly 키워드를 key 앞에 붙이면 해당 값은 수정할 수 없다.
 */

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };
