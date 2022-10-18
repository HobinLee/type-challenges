type MyReturnType<T extends (...params: any) => any> = T extends (...params: any) => infer P ? P : never
