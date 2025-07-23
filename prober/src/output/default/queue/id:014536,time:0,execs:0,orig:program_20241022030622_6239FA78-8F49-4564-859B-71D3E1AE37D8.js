const v1 = makeMasquerader();
const v3 = Array(v1);
v3[Symbol.iterator] = v1;
try { new Int32Array(v3); } catch (e) {}
gc();
