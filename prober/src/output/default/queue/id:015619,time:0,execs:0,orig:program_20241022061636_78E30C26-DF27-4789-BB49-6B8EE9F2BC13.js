const v1 = new ArrayBuffer(ArrayBuffer);
let v3;
try { v3 = Float32Array(v1, Float32Array, v1); } catch (e) {}
new Float32Array(v1, v3, v3);
gc();
