let v1 = 10 - 10;
const v4 = new Uint32Array(10, v1, v1--);
const t2 = v4.constructor;
const v6 = new t2();
v6.copyWithin(v1);
gc();
