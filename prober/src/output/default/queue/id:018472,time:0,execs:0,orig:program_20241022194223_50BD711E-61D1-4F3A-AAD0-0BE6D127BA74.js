const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    function f4(a5, a6, a7, a8) {
        return arguments;
    }
    f4();
    const v13 = new ArrayBuffer(1000);
    const v15 = new DataView(v13);
    try { v15.getFloat64(3.826282869560478); } catch (e) {}
}
gc();
