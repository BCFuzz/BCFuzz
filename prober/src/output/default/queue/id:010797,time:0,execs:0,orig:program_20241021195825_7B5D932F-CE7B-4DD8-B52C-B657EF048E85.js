class C0 {
}
const v1 = new C0();
for (let i4 = 0, i5 = 10; i4 !== i5; i5--) {
}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    new a15(v1, C0);
    for (let i21 = 0, i22 = 10;
        (() => {
            i22--;
            class C24 {
                #toString(a26) {
                }
                constructor(a28) {
                    try {
                        a28.#toString();
                    } catch(e30) {
                    }
                }
            }
            const v31 = new C24();
            const t12 = v31.constructor;
            new t12(v31);
            return i21 < i22;
        })();
        ) {
    }
}
new F12(F12, F12);
gc();
