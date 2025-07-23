const v2 = new Int8Array(5, 5);
const v4 = v2["reverse"]();
let v5;
try { v5 = v4.sort(5); } catch (e) {}
Object.defineProperty(v4, "constructor", { writable: true, value: v5 });
v4.subarray();
gc();
