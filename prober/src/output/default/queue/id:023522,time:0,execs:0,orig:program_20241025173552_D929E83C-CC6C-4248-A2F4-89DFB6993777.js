const v3 = createGlobalObject().Float16Array;
const v4 = new v3(v3);
v4.constructor = Int32Array;
v4.slice();
gc();
