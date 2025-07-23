let v1 = 1;
v1++;
const v3 = new SharedArrayBuffer(v1);
const v5 = new Int16Array(v3);
v5.sort();
gc();
