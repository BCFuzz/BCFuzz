const v2 = Function(1000000.0);
v2.alphabet = 1000000.0;
const v4 = new Uint8Array(v2);
try { v4.toBase64(v2); } catch (e) {}
gc();
