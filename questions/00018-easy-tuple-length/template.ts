

/*
 * 튜플은 반드시 'length'를 갖고있기 때문에 extends가 필요없었다.
*/

type Length<T extends readonly any[]> = T['length'];

