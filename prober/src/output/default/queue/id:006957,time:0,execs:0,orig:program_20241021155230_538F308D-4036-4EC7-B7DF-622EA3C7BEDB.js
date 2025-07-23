const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(createGlobalObject, createGlobalObject, v1, createGlobalObject, createGlobalObject);
try { v3.every(v3, v3, createGlobalObject, v2, v2); } catch (e) {}
gc();
