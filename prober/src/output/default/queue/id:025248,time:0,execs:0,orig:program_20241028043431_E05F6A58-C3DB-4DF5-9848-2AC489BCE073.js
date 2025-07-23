const v1 = new Uint8Array();
for (let i = 0; i < 25; i++) {
    createGlobalObject().WebAssembly.compile(v1);
}
gc();
