let v0 = 14;
for (let i = 0; i < 10; i++) {
    class C1 {
        constructor(a3) {
            v0--;
            a3 in this;
        }
    }
    const v6 = new C1(v0);
    const t9 = v6.constructor;
    new t9(v0);
}
gc();
