function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return f7;
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
            v21[Symbol.match] = f7;
            const t24 = v21.constructor;
            new t24(v21);
        }
        return this;
    }
    Object.defineProperty(this, "e", { enumerable: true, get: f7, set: f8 });
}
const v26 = new F3(F3, F3);
v26.e = v2;
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
gc();
