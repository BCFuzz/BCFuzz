const v1 = createGlobalObject();
const v2 = v1.SyntaxError;
const v3 = v1.Atomics;
try { v3.xor(v2, v3, v3); } catch (e) {}
gc();
