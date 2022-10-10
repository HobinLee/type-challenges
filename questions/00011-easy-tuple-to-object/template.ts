/**
 * Union 타입이 아닌 튜플은 [P in T[number]] 로 순회가 가능하다.
 * 
 * 그 중, string, number, symbol이 아닌 타입은 순회가 되지 않는다.
 */

type TupleToObject<T extends readonly any[]> = { [P in T[number]] : P };

/************************************************************/

type A = ['hello', 'a', 3, { member: 'string'}, 5];

/**
  B = {
    hello: 'hello';
    a: 'a';
    3: 3;
    5: 5;
  }
 */
type B = TupleToObject<A>;