const v4 = new Uint16Array(998);
const v5 = v4.join("b");
const v6 = Int32Array.constructor;
try { v6(v5); } catch (e) {}
gc();
