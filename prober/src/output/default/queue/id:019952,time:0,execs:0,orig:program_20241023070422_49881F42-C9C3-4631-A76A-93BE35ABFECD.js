function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new SharedArrayBuffer();
    const v11 = new DataView(v9);
    try { v11.getFloat64(255, -2147483649); } catch (e) {}
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
}
new F0();
gc();
