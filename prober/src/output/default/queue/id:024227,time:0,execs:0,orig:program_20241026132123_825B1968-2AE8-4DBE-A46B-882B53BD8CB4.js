function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 92; v3++) {
        class C5 extends Date {
        }
        const v6 = new C5();
        const v7 = v6.getFullYear;
        const v10 = Math.abs(-2147483648);
        try { v7(v10, F0, C5, v3, v7); } catch (e) {}
        for (let v12 = 0; v12 < 25; v12++) {
        }
    }
}
new F0();
gc();
