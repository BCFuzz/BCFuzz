const v2 = new Int8Array();
const v4 = v2["reverse"]();
Object.defineProperty(v4, "constructor", { writable: true, value: -5 });
try { v4.subarray(); } catch (e) {}
gc();
