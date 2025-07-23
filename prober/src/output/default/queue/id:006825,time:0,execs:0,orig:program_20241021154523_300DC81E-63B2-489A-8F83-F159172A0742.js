const v2 = new Int8Array(9);
const v3 = v2.toLocaleString();
try { Uint8Array.fromHex(v3); } catch (e) {}
gc();
