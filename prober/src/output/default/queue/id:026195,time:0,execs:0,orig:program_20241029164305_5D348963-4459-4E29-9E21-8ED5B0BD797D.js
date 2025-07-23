const v2 = createGlobalObject().Float16Array;
const v3 = new v2();
const v5 = new Uint8ClampedArray();
v5.__proto__ = v3;
v5.slice(v2);
gc();
