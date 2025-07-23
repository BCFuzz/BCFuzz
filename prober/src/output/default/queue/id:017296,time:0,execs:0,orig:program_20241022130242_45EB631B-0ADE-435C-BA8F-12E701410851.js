function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v6 = 0; v6 < 250; v6++) {
        const v9 = new SharedArrayBuffer(v6, a4);
        const v11 = new DataView(v9);
        try { v11.getFloat64(536870887, 536870887); } catch (e) {}
    }
}
new F0(F0, F0, F0, F0);
gc();
