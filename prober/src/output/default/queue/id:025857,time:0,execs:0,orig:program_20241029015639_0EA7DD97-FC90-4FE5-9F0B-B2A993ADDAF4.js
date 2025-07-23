const v1 = new Int32Array(Int32Array, Int32Array);
const v3 = new Float32Array(Float32Array);
v3.__proto__ = v1;
v3.slice();
gc();
