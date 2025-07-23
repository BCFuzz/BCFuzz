function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new SharedArrayBuffer();
    const v11 = new DataView(v9);
    try { v11.setFloat64(255, -2147483649, -2147483649); } catch (e) {}
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
        for (let v23 = 0; v23 < 5; v23++) {
        }
    }
}
const v24 = new F0();
new F0(v24, F0, v24, v24);
new F0();
gc();
