const v2 = new Float32Array();
const v3 = v2.subarray();
v3.element = "yX";
const v7 = createGlobalObject().WebAssembly.Table;
try { new v7(v3); } catch (e) {}
gc();
