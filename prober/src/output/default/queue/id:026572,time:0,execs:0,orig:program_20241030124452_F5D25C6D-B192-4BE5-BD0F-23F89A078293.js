for (let i = 0; i < 5; i++) {
    const v1 = new SharedArrayBuffer();
    const v3 = new DataView(v1);
    const v4 = v3.getUint8;
    try { v4(v3, DataView, DataView); } catch (e) {}
}
gc();
