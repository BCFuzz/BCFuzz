const v2 = new Uint16Array(1024);
const v4 = new Float32Array();
try { v4.set(v2); } catch (e) {}
const t3 = v4.constructor;
const v7 = new t3(v4);
v7.toReversed();
gc();
