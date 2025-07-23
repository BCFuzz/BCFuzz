function f0() {
    class C2 {
        constructor(a4, a5) {
            try {
                super.fromEntries();
            } catch(e7) {
            }
        }
        static #b;
    }
    class C8 extends C2 {
    }
    const v9 = new C8();
    return v9;
}
const v12 = new BigInt64Array(129);
v12.filter(f0);
gc();
