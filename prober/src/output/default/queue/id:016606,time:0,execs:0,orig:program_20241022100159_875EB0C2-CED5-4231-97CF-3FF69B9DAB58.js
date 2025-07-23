const v2 = new Uint32Array(Symbol, Uint32Array, Uint32Array);
v2[Symbol.toPrimitive] = Symbol;
delete this[v2];
gc();
