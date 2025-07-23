const v1 = new ArrayBuffer();
const v4 = createGlobalObject().Float16Array;
v4[Symbol.toPrimitive] = createGlobalObject;
try { new v4(v1, v4); } catch (e) {}
gc();
