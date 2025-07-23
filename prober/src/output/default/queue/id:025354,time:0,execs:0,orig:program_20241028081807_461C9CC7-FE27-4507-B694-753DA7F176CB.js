const v0 = [-2];
const v2 = new Uint8Array(v0);
const v6 = createGlobalObject().WebAssembly.compile(v2);
try { v6.then(v0, createGlobalObject); } catch (e) {}
gc();
