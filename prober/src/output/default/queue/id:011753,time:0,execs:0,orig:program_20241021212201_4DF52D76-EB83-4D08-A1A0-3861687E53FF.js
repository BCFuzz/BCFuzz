function f0(a1, a2) {
    const v4 = new SharedArrayBuffer(a2, SharedArrayBuffer);
    const v6 = new DataView(v4);
    const v7 = v6.setFloat32;
    try { v7(f0, v7, v7, a2); } catch (e) {}
    return f0;
}
f0(f0, f0);
gc();
