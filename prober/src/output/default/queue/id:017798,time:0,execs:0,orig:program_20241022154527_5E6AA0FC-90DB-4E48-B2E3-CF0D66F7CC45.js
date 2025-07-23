function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = -2147483649;
    v6--;
    const v10 = new SharedArrayBuffer(a5);
    const v12 = new DataView(v10);
    try { v12.setFloat64(255, v6, v6); } catch (e) {}
    for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        for (let v24 = 0; v24 < 5; v24++) {
        }
    }
}
const v25 = new F0(F0, F0, F0, F0);
const v26 = v25.constructor;
const v27 = new v26(v26, v25, F0, v25, F0);
new F0(v27, F0, v27, v25);
gc();
