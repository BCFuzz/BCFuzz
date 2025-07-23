for (let v0 = 0; v0 < 25; v0++) {
    class C1 {
        constructor(a3, a4) {
            try { new a3(); } catch (e) {}
            a3[1858];
        }
    }
    const v7 = new C1(C1);
    const t8 = v7.constructor;
    new t8(v7);
}
gc();
