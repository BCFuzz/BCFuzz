function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return F3;
    }
    function f8(a9) {
        for (let v10 = 0; v10 < 100; v10++) {
            class C11 {
                #toString(a13) {
                    this[Symbol.match];
                }
                constructor(a18) {
                    try {
                        a18.#toString();
                    } catch(e20) {
                    }
                }
            }
            const v21 = new C11();
            const t23 = v21.constructor;
            new t23(v21);
        }
        return F3;
    }
    Object.defineProperty(this, "e", { enumerable: true, get: f7, set: f8 });
}
const v24 = new F3(v2, F3);
v24.e = v2;
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
gc();
