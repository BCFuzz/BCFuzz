const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v2 = v1.join;
let v3;
try { v3 = v2(Float32Array, v1); } catch (e) {}
v1["join"](v3);
gc();
