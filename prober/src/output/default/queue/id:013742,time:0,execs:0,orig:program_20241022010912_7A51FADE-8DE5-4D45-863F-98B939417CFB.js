function f0() {
    return f0;
}
const v3 = new Uint32Array(150);
for (const v4 in v3) {
    class C5 {
        #e;
        constructor(a7) {
            this.f = f0;
            delete this.f;
        }
    }
    new C5();
}
gc();
