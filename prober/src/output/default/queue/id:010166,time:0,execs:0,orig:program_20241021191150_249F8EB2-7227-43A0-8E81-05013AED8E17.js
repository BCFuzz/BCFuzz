for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i18 = 0, i19 = 10;
        (() => {
            i19--;
            class C21 {
                #toString(a23) {
                }
                constructor(a25) {
                    try {
                        a25.#toString();
                    } catch(e27) {
                    }
                }
            }
            const v28 = new C21();
            const t12 = v28.constructor;
            new t12(v28);
            return i18 < i19;
        })();
        ) {
    }
}
new F10(F10, F10, F10, F10);
gc();
