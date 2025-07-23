let v1;
try { v1 = Float32Array.apply(Float32Array); } catch (e) {}
const v3 = new Int8Array();
v3.copyWithin(v1);
gc();
