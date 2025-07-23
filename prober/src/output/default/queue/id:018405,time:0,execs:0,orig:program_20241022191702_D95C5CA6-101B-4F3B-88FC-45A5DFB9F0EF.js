for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        let v7 = -2147483649;
        v7--;
        const v11 = new SharedArrayBuffer();
        const v13 = new DataView(v11);
        try { v13.setUint16(255, v7, v7); } catch (e) {}
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
            for (let v25 = 0; v25 < 5; v25++) {
            }
        }
    }
    new F1(v0, v0, v0, v0);
}
gc();
