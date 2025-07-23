function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 92; v3++) {
        class C5 extends Date {
        }
        const v6 = new C5();
        const v7 = v6.getFullYear;
        let v9 = -2147483648;
        v9--;
        const v11 = Math.abs(v9);
        try { v7(v11); } catch (e) {}
        for (let v13 = 0; v13 < 25; v13++) {
        }
    }
}
new F0();
gc();
