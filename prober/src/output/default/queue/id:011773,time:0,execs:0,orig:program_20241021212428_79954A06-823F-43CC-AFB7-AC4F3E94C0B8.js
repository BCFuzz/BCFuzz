const v2 = new Uint8ClampedArray(1);
const v5 = Float64Array.of().slice();
try { v5.set(v2); } catch (e) {}
gc();
