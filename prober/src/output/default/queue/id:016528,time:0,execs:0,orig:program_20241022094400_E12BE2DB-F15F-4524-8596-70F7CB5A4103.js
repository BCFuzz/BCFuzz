const v1 = createGlobalObject();
const v2 = v1.WebAssembly;
const v4 = v2.Exception.prototype;
try { v4.is(v1, v2, v2, v4, v4); } catch (e) {}
gc();
