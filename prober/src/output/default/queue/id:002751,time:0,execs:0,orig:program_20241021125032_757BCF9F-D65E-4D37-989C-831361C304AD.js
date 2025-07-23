function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        const v10 = [a9,a9,a9];
        const v11 = [v10];
        class C12 {
            constructor(a14, a15) {
                a14[Symbol.matchAll];
            }
        }
        const v19 = new C12(v10);
        new C12(v11);
        new C12(v10);
        return v19;
    }
    Object.defineProperty(this, "f", { set: f8 });
    this.f = v2;
}
new F3();
new F3();
new F3();
gc();
