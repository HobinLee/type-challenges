/**
 * in 키워드는 K(string | number | symbol)에 있는 모든 타입을 순회시킴
 * K가 'A' | 'B' |  'C' 일 경우, P in K = 'A', 'B', 'C'가 됨
 */

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

/***************************************************************************************/

type Animal = {
  type: string;
  name: string;
  age: number;
}

type MyType<K extends string> = {[P in K]: P extends keyof Animal ? Animal[P]: '없는 타입' }

/*
  Result = { 
    age: number;
    A: '없는타입';
    C: '없는타입';
  }
*/
type Result = MyType<'A' | 'C' | 'age'>;