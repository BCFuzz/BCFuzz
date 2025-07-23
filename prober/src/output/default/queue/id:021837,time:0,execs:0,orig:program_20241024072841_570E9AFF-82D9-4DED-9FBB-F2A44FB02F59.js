const v2 = new Uint8Array(2);
const v3 = v2.toBase64(v2);
const v5 = WeakRef.constructor;
try { v5(v3, 2); } catch (e) {}
gc();
