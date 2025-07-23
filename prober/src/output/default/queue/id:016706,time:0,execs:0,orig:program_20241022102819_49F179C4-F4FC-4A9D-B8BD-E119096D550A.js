for (let i = 0; i < 5; i++) {
    const v1 = new SharedArrayBuffer();
    const v3 = new DataView(v1);
    const v4 = v3.getFloat16;
    try { v4(v3, v4, v4, DataView); } catch (e) {}
}
gc();
