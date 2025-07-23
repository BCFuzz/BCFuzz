const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v3 = new t1(v1, v1, createGlobalObject, createGlobalObject, createGlobalObject);
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
const v15 = v3.constructor;
v15.__proto__ = Float32Array;
const v16 = new v15();
v16.subarray();
gc();
