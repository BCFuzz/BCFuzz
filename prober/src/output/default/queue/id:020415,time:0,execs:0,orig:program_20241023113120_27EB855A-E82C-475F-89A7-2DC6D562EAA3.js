let v1;
try {
const t0 = 638104779;
v1 = t0();
} catch (e) {}
let v2;
try { v2 = v1(); } catch (e) {}
const v5 = new SharedArrayBuffer(v2, SharedArrayBuffer);
const v7 = new DataView(v5);
try { v7.setUint32(536870887, 536870887, v2); } catch (e) {}
gc();
