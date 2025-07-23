const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v3 = new t1(v1, v1, createGlobalObject);
const v5 = new Uint8ClampedArray(Uint8ClampedArray);
v5.__proto__ = v3;
v5.slice();
gc();
