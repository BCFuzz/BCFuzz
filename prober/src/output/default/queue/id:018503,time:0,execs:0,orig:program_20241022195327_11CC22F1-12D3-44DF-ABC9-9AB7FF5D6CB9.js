const v1 = Function();
v1.alphabet = Function;
const v3 = new Uint8Array(v1, v1, v1);
try { v3.toBase64(v1); } catch (e) {}
gc();
