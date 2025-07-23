const v2 = new Uint8Array();
const v3 = v2.slice();
try { v3.set(undefined); } catch (e) {}
gc();
