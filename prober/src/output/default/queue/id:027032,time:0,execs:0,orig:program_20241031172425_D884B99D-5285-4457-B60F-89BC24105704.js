function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = this.constructor;
    try { new v2(v2); } catch (e) {}
}
const v4 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        return f9;
    }
    function f10(a11) {
        for (let v12 = 0; v12 < 50; v12++) {
            class C13 {
                #toString(a15) {
                }
            }
            const v16 = new C13();
            function f17(a18, a19) {
                Reflect.construct(C13, [a19], F0);
                return a11;
            }
            v16.constructor = f17;
            const v23 = v16.constructor;
            v23(a11, v23);
        }
        return a11;
    }
    Object.defineProperty(this, "e", { enumerable: true, get: f9, set: f10 });
}
const v25 = new F5();
v25.e = v4;
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
gc();
