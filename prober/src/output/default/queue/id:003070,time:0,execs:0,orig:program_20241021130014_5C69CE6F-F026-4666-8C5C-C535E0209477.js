const v2 = new Uint8ClampedArray(3);
const v4 = new Float32Array();
const v5 = v4.toReversed();
try { v5.set(v2); } catch (e) {}
gc();
