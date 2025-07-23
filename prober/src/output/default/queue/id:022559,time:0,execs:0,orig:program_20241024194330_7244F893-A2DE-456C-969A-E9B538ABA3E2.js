const v3 = new Uint32Array(1000);
for (const v4 in v3) {
    function f5(a6, a7, a8, a9) {
        return arguments;
    }
    f5();
    const v13 = new SharedArrayBuffer(1000);
    const v15 = new DataView(v13);
    v15.setUint32(Int16Array, f5);
}
gc();
