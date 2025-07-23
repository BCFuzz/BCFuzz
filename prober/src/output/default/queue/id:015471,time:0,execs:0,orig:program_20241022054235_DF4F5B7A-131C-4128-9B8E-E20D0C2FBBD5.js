for (let v1 = 0; v1 < 50; v1++) {
    for (let v2 = 0; v2 < 5; v2++) {
    }
    const v4 = new SharedArrayBuffer(v1);
    const v6 = new DataView(v4);
    try { v6.setFloat64(v6, -1.7032420584709566e+307); } catch (e) {}
}
gc();
