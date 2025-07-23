function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Uint32Array(1003);
    for (const v7 in v6) {
        const v9 = [this];
        const v11 = new ArrayBuffer(129, ArrayBuffer);
        const v13 = new DataView(v11);
        try { v13.getFloat32(v9, 129); } catch (e) {}
        for (let i17 = 0, i18 = 10; i18--, i17 < i18;) {
        }
    }
}
new F0(F0, F0);
gc();
