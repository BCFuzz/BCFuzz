const v1 = new Uint8ClampedArray();
let v2;
try { v2 = v1.findLast(); } catch (e) {}
const v4 = new Float32Array(v2, v2, v2);
const v5 = v4.sort();
try { v5.set(v2); } catch (e) {}
gc();
