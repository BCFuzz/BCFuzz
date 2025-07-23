const v1 = eval();
const v3 = Array();
v3[Symbol.iterator] = v1;
new Int32Array(v3);
gc();
