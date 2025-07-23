const v2 = new Uint8Array(2190);
const v3 = v2.toBase64(v2, v2);
try { JSON.parse(v3); } catch (e) {}
gc();
