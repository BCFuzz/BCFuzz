const v2 = new Float32Array(2916);
const v4 = new Int32Array();
try { v4.set(v2); } catch (e) {}
const v8 = createGlobalObject().Float16Array;
let v9 = 8;
v9--;
const v11 = new v8(v9);
v11.toSorted();
gc();
