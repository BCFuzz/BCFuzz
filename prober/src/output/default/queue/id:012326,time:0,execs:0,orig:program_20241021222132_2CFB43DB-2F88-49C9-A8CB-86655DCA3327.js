const v2 = new Uint8ClampedArray(14);
let v4;
try { v4 = v2.sort(Float32Array); } catch (e) {}
v2.toSorted(v4);
gc();
