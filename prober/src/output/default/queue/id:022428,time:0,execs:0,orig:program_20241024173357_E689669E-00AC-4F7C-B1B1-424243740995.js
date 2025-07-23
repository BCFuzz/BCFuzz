function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9;
        (() => {
            i9--;
            Symbol.constructor;
            const o15 = {
                ...Symbol,
            };
            function f16(a17, a18) {
                return Symbol;
            }
            class C19 extends f16 {
                #m(a21, a22, a23, a24) {
                }
            }
            new C19();
            for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
            }
        })()) {
    }
}
new F0();
gc();
