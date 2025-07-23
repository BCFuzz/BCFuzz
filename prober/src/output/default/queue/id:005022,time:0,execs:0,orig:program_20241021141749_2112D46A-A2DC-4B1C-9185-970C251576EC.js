const v1 = new Uint32Array();
const v4 = new Float32Array(129);
v1.copyWithin(Float32Array, Uint32Array, ...v1, ...v4);
gc();
