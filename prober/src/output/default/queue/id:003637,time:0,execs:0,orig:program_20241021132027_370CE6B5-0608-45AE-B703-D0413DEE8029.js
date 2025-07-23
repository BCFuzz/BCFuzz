const v0 = [2];
const v4 = new Float64Array(129);
const v7 = new Uint16Array(129, 129, Uint16Array.from(v0));
const t3 = v7.constructor;
new t3(v4);
try { new Uint16Array(4294967295); } catch (e) {}
gc();
