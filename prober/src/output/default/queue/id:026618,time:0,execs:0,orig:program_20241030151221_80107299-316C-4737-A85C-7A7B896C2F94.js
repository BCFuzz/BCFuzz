Int8Array[0] = -650167365n;
const v4 = createGlobalObject();
const v5 = v4.Float16Array;
const v7 = new ArrayBuffer(1622);
const v8 = new v5(v7);
const v9 = v8.with(createGlobalObject, v4, v5);
try { v9.set(Int8Array); } catch (e) {}
gc();
