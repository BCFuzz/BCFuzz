for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = new SharedArrayBuffer();
        const v12 = new DataView(v10);
        try { v12.setUint16(255, -2147483649, -2147483649); } catch (e) {}
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
            for (let v24 = 0; v24 < 5; v24++) {
            }
        }
    }
    new F1(v0, v0, F1, F1);
}
gc();
