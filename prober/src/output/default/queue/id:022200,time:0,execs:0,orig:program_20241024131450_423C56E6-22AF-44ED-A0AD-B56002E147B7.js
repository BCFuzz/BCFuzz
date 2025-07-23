function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
        }
        class C8 extends C7 {
        }
        Object.defineProperty(C7, 2, { value: NaN });
    }
    new F2(F0, this);
}
new F0();
for (let v12 = 0; v12 < 10; v12++) {
    const o42 = {
        [undefined](a15, a16, a17) {
            function F18(a20, a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                class C25 {
                    8 = C25;
                    constructor(a27, a28) {
                        let v29 = arguments;
                        v29 = 2;
                    }
                    7 = -1343674861;
                }
                new C25();
                for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
                }
            }
            new F18();
        },
    };
    o42.undefined(o42, o42, o42, F0, undefined);
}
gc();
