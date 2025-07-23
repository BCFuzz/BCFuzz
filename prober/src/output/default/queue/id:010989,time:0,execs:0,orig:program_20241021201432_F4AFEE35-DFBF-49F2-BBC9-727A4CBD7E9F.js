let v1 = 14;
for (let i = 0; i < 10; i++) {
    class C2 {
        constructor(a4) {
            this[12] = -12;
            v1--;
            a4 in this;
        }
    }
    const v7 = new C2(v1);
    const t10 = v7.constructor;
    new t10(v1);
}
gc();
