const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    v2[9] = ~a4;
    const v10 = new ArrayBuffer();
    const v12 = new DataView(v10);
    const v13 = v12.setBigUint64;
    try { v13(); } catch (e) {}
}
v2.map(f3);
gc();
