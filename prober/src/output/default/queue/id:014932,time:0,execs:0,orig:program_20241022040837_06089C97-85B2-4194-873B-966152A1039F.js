const v1 = new Int8Array();
const v4 = new Uint8Array(16);
const t2 = createGlobalObject().Float16Array;
const v8 = new t2(v1, v4, Int8Array);
const t4 = v8.constructor;
const v10 = new t4(v4);
let v12;
try { v12 = v10["asinh"](); } catch (e) {}
v10.includes(v1, v12);
gc();
