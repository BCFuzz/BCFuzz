const v0 = [-2];
const v2 = new Uint8Array(v0, v0, v0);
const v5 = createGlobalObject().WebAssembly;
v5.LinkError;
v5.compile(v2).then(v0, createGlobalObject);
gc();
