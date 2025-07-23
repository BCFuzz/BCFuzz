function f0() {
    class C1 {
        constructor(a3, a4, a5) {
            super.toString();
        }
    }
    const v7 = new C1(f0, f0, C1);
    const t7 = v7.constructor;
    const v9 = new t7(v7);
    const v10 = new C1(v9, f0, f0);
    return v10;
}
f0();
f0();
f0();
gc();
