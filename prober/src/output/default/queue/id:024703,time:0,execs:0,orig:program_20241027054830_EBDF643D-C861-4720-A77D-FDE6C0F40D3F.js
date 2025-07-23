const t0 = createGlobalObject().Float16Array;
const v3 = new t0(createGlobalObject);
const v5 = new Float32Array(Float32Array);
v5.__proto__ = v3;
v5.slice();
gc();
