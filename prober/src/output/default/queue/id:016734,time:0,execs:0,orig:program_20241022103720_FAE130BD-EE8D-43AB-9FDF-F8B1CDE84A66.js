function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 92; v3++) {
        class C5 extends Date {
        }
        const v6 = new C5();
        const v7 = v6.getFullYear;
        try { v7(); } catch (e) {}
        for (let v9 = 0; v9 < 25; v9++) {
        }
    }
}
new F0();
gc();
