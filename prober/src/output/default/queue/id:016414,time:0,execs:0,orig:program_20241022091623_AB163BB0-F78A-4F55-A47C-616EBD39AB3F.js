function f0(a1, a2, a3) {
    class C4 {
        #m(a6, a7) {
            const v8 = this.constructor;
            try { new v8(a2, v8, v8); } catch (e) {}
        }
        constructor(a11) {
            this.#m();
        }
    }
    new C4();
    return C4;
}
const v14 = f0();
f0(v14, v14, f0);
gc();
