const v3 = createGlobalObject().Float16Array;
const v4 = new ArrayBuffer();
const v5 = new v3(v4);
v4["transfer"]();
try { v5.sort(); } catch (e) {}
gc();
