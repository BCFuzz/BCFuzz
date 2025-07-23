function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const o15 = {
                ...Symbol,
            };
            function f16(a17, a18) {
                for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                }
                return Symbol;
            }
            class C29 extends f16 {
                #m(a31, a32, a33, a34) {
                }
            }
            new C29();
            for (let [i51, i52] = (() => {
                    new Uint8ClampedArray(4294967296);
                    for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
                    }
                    return [0, 10];
                })();
                i51 < i52;
                i52--) {
            }
        })()) {
    }
}
new F0(F0, F0, F0, F0);
gc();
