const o1 = {
};
const v2 = o1.Float16Array;
const v5 = new Int32Array();
v5.copyWithin(-4294967295, 5, v2);
gc();
