const v1 = new Float32Array();
const v2 = v1.subarray(Float32Array);
const v6 = createGlobalObject().WebAssembly.Table;
try { new v6(v2); } catch (e) {}
gc();
