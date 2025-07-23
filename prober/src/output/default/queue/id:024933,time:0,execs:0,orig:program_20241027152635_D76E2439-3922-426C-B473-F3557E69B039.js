const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(createGlobalObject, v2, v2, v1, v1);
v3.buffer.transfer();
try { Float64Array.from(v3); } catch (e) {}
gc();
