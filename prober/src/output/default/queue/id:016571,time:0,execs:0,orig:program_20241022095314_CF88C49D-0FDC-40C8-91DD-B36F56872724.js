function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    return f3;
}
v2[Symbol.matchAll] = f3;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11(a12) {
        const v13 = [f11,f11,f11,f11];
        const v14 = [v13];
        function f15(a16, a17) {
            return a17;
        }
        Object.defineProperty(v14, Symbol.matchAll, { value: f15 });
        class C19 {
            constructor(a21, a22) {
                a21[Symbol.matchAll];
            }
        }
        new C19(v13);
        new C19(v14);
        new C19(v2);
        return f11;
    }
    Object.defineProperty(this, "f", { set: f11 });
    this.f = v2;
}
const v28 = new F6();
new F6(v2, f3, v28);
new F6();
gc();
