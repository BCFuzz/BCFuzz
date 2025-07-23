function f0() {
    class C1 {
        constructor(a3, a4) {
            try {
                super.fromEntries();
            } catch(e6) {
            }
        }
        static #b;
    }
    class C7 extends C1 {
    }
    const v8 = new C7();
    return v8;
}
const v11 = new BigInt64Array(129);
v11.filter(f0);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
gc();
