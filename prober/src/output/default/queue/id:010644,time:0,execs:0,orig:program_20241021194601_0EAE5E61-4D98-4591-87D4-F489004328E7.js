const v3 = new Int8Array(8);
const v4 = createGlobalObject();
const t2 = v4.Float16Array;
const v6 = new t2(v3);
v6.reverse(Int8Array, v4);
gc();
