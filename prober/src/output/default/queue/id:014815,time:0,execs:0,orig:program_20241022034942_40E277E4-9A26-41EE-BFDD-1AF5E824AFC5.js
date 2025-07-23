const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v2, v2, v1);
const v5 = new Int32Array(v1, v2);
let v6;
try { v6 = v5.sort(v5); } catch (e) {}
v3.sort(v6);
gc();
