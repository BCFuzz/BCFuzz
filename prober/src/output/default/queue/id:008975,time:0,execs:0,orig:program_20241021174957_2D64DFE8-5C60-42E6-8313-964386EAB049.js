const v1 = new Int8Array();
const v4 = Array.bind(Array, v1, [Int8Array,Int8Array]);
v4.name = v4;
gc();
