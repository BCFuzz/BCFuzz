function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        (() => {
            i9--;
            class C11 {
                #toString(a13) {
                }
                constructor(a15) {
                    try {
                        a15.#toString();
                    } catch(e17) {
                    }
                }
            }
            new C11();
            return i8 < i9;
        })();
        ) {
    }
}
new F0(F0, F0, F0, F0);
gc();
