const v1 = createGlobalObject();
const v4 = createGlobalObject().WebAssembly.Exception;
try { new v4(v1, v4); } catch (e) {}
gc();
