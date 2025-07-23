const v2 = new Uint8Array(2);
const v3 = v2.toBase64(v2, v2, v2, 2, Uint8Array);
const v5 = Float64Array.constructor;
try { v5(v3); } catch (e) {}
gc();
