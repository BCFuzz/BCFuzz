let v3;
try { v3 = Int8Array.apply(Int8Array, Int8Array); } catch (e) {}
const v4 = new Int8Array(3729, 3729, 3729);
const v5 = new Uint8ClampedArray();
v4.fill(v5, 3729, v3);
gc();
