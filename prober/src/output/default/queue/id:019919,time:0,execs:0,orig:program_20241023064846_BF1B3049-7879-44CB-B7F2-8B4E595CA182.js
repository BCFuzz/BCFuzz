const o0 = {
};
const v1 = o0[3118];
const v4 = new Uint32Array(1000);
for (const v5 in v4) {
    function f6(a7, a8, a9, a10) {
        return arguments;
    }
    f6();
    const v15 = new SharedArrayBuffer(1000);
    const v17 = new DataView(v15);
    try { v17.setInt8(Float64Array, v1); } catch (e) {}
}
gc();
