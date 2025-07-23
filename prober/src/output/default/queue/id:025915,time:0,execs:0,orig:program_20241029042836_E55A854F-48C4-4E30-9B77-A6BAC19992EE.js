const v1 = new Uint16Array();
v1.subarray();
const v5 = createGlobalObject().Float16Array;
const v6 = new v5();
v6.subarray(v5, v6, v1, v6, Uint16Array).set(v1);
gc();
