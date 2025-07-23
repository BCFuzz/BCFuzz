let v0 = 0;
for (let i = 0; i < 10; i++) {
    v0++;
    class C2 {
        constructor(a4) {
            this[4] = this;
            a4 in this;
        }
    }
    new C2(v0);
}
gc();
