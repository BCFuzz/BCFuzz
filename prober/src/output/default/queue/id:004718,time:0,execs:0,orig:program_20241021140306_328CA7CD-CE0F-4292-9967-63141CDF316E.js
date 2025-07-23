const v1 = new Int32Array(Int32Array);
let v2 = 0;
v2--;
v1.copyWithin(v2);
gc();
