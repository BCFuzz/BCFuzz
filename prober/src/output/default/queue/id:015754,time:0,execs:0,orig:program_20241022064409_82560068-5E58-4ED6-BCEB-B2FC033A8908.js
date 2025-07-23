function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(3.0, F1, F1, F1);
for (let v8 = 0; v8 < 50; v8++) {
    for (let v9 = 0; v9 < 5; v9++) {
    }
    const v11 = new SharedArrayBuffer(v8);
    const v13 = new DataView(v11);
    try { v13.setInt16(3.0, v7); } catch (e) {}
}
gc();
