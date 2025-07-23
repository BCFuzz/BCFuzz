class C1 {
}
const v2 = new C1();
for (let i5 = 0, i6 = 10; i5 !== i6; i6--) {
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    new a16(v2, C1);
    for (let i22 = 0, i23 = 10;
        (() => {
            i23--;
            class C25 {
                #toString(a27) {
                }
                constructor(a29) {
                    try {
                        a29.#toString();
                    } catch(e31) {
                    }
                }
            }
            const v32 = new C25(F13);
            const t12 = v32.constructor;
            new t12("UHMo");
            const t14 = v32.constructor;
            new t14(v32);
            return i22 < i23;
        })();
        ) {
    }
}
new F13(F13, F13);
gc();
